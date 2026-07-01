import { Check, FileText } from "lucide-react";
import Button from "./Button.jsx";

export default function ServicePanel({ service, index, onNavigate }) {
  return (
    <article
      id={service.id}
      className="grid scroll-mt-28 overflow-hidden rounded-md border border-navy-900/10 bg-white shadow-subtle transition duration-200 hover:border-navy-700/25 lg:grid-cols-[0.34fr_0.66fr]"
    >
      <div className="border-b border-navy-900/10 bg-steel-50 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">
            Service {String(index + 1).padStart(2, "0")}
          </p>
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-navy-900/10 bg-white text-navy-700">
            <FileText aria-hidden="true" size={20} strokeWidth={1.7} />
          </span>
        </div>
        <h2 className="mt-8 text-2xl font-semibold leading-tight text-navy-950 sm:text-3xl">
          {service.title}
        </h2>
        <div className="mt-6 h-px w-16 bg-navy-700/30" />
        <p className="mt-6 text-sm leading-7 text-steel-700">
          <span className="font-semibold text-navy-950">Best for: </span>
          {service.bestFor}
        </p>
      </div>

      <div className="p-7 sm:p-8 lg:p-9">
        <p className="text-lg leading-8 text-steel-700">{service.description}</p>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">
              Common support areas
            </h3>
            <ul className="mt-5 grid gap-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-steel-700">
                  <Check className="mt-1 shrink-0 text-navy-700" aria-hidden="true" size={18} strokeWidth={2} />
                  <span className="leading-7">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-navy-900/10 bg-steel-50 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">
              Focus
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-navy-900/10 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-900/10 pt-6">
          <Button href="/contact" onNavigate={onNavigate} variant="outline">
            Inquire About This Service
          </Button>
        </div>
      </div>
    </article>
  );
}
