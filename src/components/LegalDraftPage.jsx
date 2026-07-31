import { Fragment, useEffect } from "react";

function renderInline(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\])/g).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{renderInline(part.slice(2, -2), `${key}-strong`)}</strong>;
    }

    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={key} className="legal-review-placeholder">
          {part}
        </span>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

function paragraphContent(lines, keyPrefix) {
  return lines.map((line, index) => {
    const hardBreak = line.endsWith("  ");
    const text = hardBreak ? line.slice(0, -2) : line;

    return (
      <Fragment key={`${keyPrefix}-${index}`}>
        {renderInline(text, `${keyPrefix}-${index}-inline`)}
        {index < lines.length - 1 && (hardBreak ? <br /> : " ")}
      </Fragment>
    );
  });
}

function isBlockStart(line) {
  return (
    /^#{1,4}\s/.test(line) ||
    line.startsWith(">") ||
    line.startsWith("- ") ||
    line === "---"
  );
}

function renderMarkdown(markdown, keyPrefix = "draft") {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,4})\s(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const Tag = `h${level}`;
      blocks.push(
        <Tag key={`${keyPrefix}-heading-${index}`}>
          {renderInline(headingMatch[2], `${keyPrefix}-heading-${index}`)}
        </Tag>,
      );
      index += 1;
      continue;
    }

    if (line === "---") {
      blocks.push(<hr key={`${keyPrefix}-rule-${index}`} />);
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quotedLines = [];

      while (index < lines.length && lines[index].startsWith(">")) {
        quotedLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }

      blocks.push(
        <blockquote key={`${keyPrefix}-quote-${index}`}>
          {renderMarkdown(quotedLines.join("\n"), `${keyPrefix}-quote-${index}`)}
        </blockquote>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];

      while (index < lines.length && lines[index].startsWith("- ")) {
        const item = lines[index].slice(2);
        items.push({
          checklist: item.startsWith("[ ] "),
          text: item.startsWith("[ ] ") ? item.slice(4) : item,
        });
        index += 1;
      }

      const checklist = items.every((item) => item.checklist);
      blocks.push(
        <ul
          key={`${keyPrefix}-list-${index}`}
          className={checklist ? "legal-review-checklist" : undefined}
        >
          {items.map((item, itemIndex) => (
            <li key={`${keyPrefix}-list-${index}-${itemIndex}`}>
              {item.checklist && (
                <input
                  type="checkbox"
                  disabled
                  aria-label={`Unconfirmed review item: ${item.text}`}
                />
              )}
              <span>{renderInline(item.text, `${keyPrefix}-list-${index}-${itemIndex}`)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraphLines = [];

    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) {
      paragraphLines.push(lines[index]);
      index += 1;
    }

    const paragraphText = paragraphLines.join(" ").replaceAll("**", "").trim();
    const legalReviewRequired = paragraphText === "LEGAL REVIEW REQUIRED BEFORE APPROVAL";

    blocks.push(
      <p
        key={`${keyPrefix}-paragraph-${index}`}
        className={legalReviewRequired ? "legal-review-required" : undefined}
      >
        {paragraphContent(paragraphLines, `${keyPrefix}-paragraph-${index}`)}
      </p>,
    );
  }

  return blocks;
}

export default function LegalDraftPage({
  documentTitle,
  markdown,
  otherDraftHref,
  otherDraftLabel,
  onNavigate,
}) {
  useEffect(() => {
    const previousTitle = document.title;
    const existingRobots = document.querySelector('meta[name="robots"]');
    const previousRobotsContent = existingRobots?.getAttribute("content");
    const robots = existingRobots ?? document.createElement("meta");

    document.title = documentTitle;
    robots.setAttribute("name", "robots");
    robots.setAttribute("content", "noindex,nofollow");

    if (!existingRobots) {
      robots.dataset.legalReviewOnly = "true";
      document.head.appendChild(robots);
    }

    document.body.classList.add("legal-review-active");

    return () => {
      document.title = previousTitle;
      document.body.classList.remove("legal-review-active");

      if (existingRobots) {
        if (previousRobotsContent === null) {
          existingRobots.removeAttribute("content");
        } else {
          existingRobots.setAttribute("content", previousRobotsContent);
        }
      } else {
        robots.remove();
      }
    };
  }, [documentTitle]);

  const navigate = (event, href) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="legal-review-page bg-steel-50">
      <div className="legal-review-banner bg-amber-100 px-5 py-4 text-center text-sm font-bold tracking-[0.08em] text-amber-950 sm:px-6">
        DRAFT FOR REVIEW — NOT FINAL OR LEGALLY APPROVED
      </div>

      <section className="legal-review-shell mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="legal-review-screen-only mb-8 rounded-md border border-navy-900/15 bg-white p-5 shadow-sm sm:p-6">
          <p className="font-semibold text-navy-950">Internal factual and legal review notice</p>
          <p className="mt-2 text-sm leading-6 text-steel-700">
            This page is for David Hoffman and Skyler Hoffman’s factual review. Bracketed
            items require confirmation. Sections marked “LEGAL REVIEW REQUIRED” are draft
            review items and are not approved clauses.
          </p>
          <nav
            aria-label="Legal draft review navigation"
            className="mt-5 flex flex-wrap gap-3 border-t border-navy-900/10 pt-5"
          >
            <a
              href="/"
              className="rounded-md border border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-steel-100"
              onClick={(event) => navigate(event, "/")}
            >
              Return to main site
            </a>
            <a
              href={otherDraftHref}
              className="rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
              onClick={(event) => navigate(event, otherDraftHref)}
            >
              Review {otherDraftLabel}
            </a>
          </nav>
        </div>

        <article className="legal-review-content rounded-md border border-navy-900/10 bg-white p-6 shadow-subtle sm:p-9 lg:p-12">
          {renderMarkdown(markdown)}
        </article>
      </section>
    </div>
  );
}
