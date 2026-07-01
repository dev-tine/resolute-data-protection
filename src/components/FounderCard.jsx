import { focusAreas, expertiseTags } from "../data/site.js";
import davidHoffmanPhoto from "../assets/david-hoffman.jpg";

export default function FounderCard({ variant = "preview" }) {
  if (variant === "profile") {
    return <FounderProfile />;
  }

  return (
    <article className="rounded-md border border-navy-900/10 bg-white p-5 shadow-subtle sm:p-6">
      <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
        <div className="mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-md border border-navy-900/10 bg-steel-100 sm:mx-0 sm:aspect-[4/5] sm:max-w-none">
          <img
            src={davidHoffmanPhoto}
            alt="David Hoffman"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">Founder</p>
          <h3 className="mt-2 text-2xl font-semibold text-navy-950">David Hoffman</h3>
          <p className="mt-1 text-sm font-semibold text-steel-700">Founder, Resolute Data Protection</p>
          <p className="mt-4 text-sm leading-6 text-steel-700">
            Cybersecurity policy professor, former global privacy leader, and experienced advisor on privacy, security, and technology policy.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {expertiseTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-navy-900/15 bg-steel-50 px-3 py-1.5 text-xs font-semibold text-navy-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function FounderProfile() {
  return (
    <article className="mx-auto max-w-6xl rounded-md border border-navy-900/10 bg-white p-6 shadow-subtle sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <div className="mx-auto w-full max-w-sm rounded-md border border-navy-900/10 bg-steel-50 p-4 lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-steel-100">
            <img
              src={davidHoffmanPhoto}
              alt="David Hoffman"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">Founder</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            David Hoffman
          </h2>
          <p className="mt-3 text-base font-semibold text-steel-700">
            Founder, Resolute Data Protection
          </p>
          <div className="mt-7 h-px w-24 bg-navy-700/40" />

          <div className="mt-7 space-y-5 text-base leading-8 text-steel-700">
            <p>
              David Hoffman brings deep experience across cybersecurity policy, privacy, legal strategy, technology governance, and public policy. He is the Steed Family Professor of the Practice of Cybersecurity Policy at Duke University's Sanford School of Public Policy and formerly served as Associate General Counsel, Director of Security Policy, and Global Privacy Officer for Intel Corporation.
            </p>
            <p>
              His work has included leadership and advisory roles across major cybersecurity and privacy organizations, including chairing the Civil Liberties and Privacy Panel for the Director's Advisory Board for the U.S. National Security Agency and chairing the board of the Center for Cybersecurity Policy and Law. He has written and spoken extensively on cybersecurity and privacy issues, including testimony before Congress.
            </p>
            <p className="font-semibold text-navy-950">
              Education: JD, Duke University School of Law; AB, Hamilton College.
            </p>
          </div>

          <div className="mt-8 rounded-md border border-navy-900/10 bg-steel-50 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
              Perspective
            </h3>
            <p className="mt-3 leading-7 text-steel-700">
              His work brings together legal judgment, policy understanding, and practical security-focused analysis to support clear decision-making.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
              Areas of Focus
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-navy-900/15 bg-white px-3 py-2 text-sm font-semibold text-navy-900"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
