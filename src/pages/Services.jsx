import { ArrowDownRight, Scale } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import ServiceAssistant from "../components/ServiceAssistant.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServicePanel from "../components/ServicePanel.jsx";
import { services } from "../data/site.js";

export default function Services({ onNavigate }) {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <>
      <section className="bg-navy-950 px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.75fr_0.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Services</p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight sm:text-6xl">Services</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel-200">
              Research, advisory, training, and expert support for complex privacy, cybersecurity, and technology-related matters.
            </p>
          </div>
        </div>
      </section>

      <ScrollReveal as="section" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-navy-900/10 pb-10 lg:grid-cols-[0.78fr_0.22fr] lg:items-end">
            <SectionHeading
              title="Focused services with practical application."
              body="Each service area is designed to help clarify issues, evaluate expectations, and support sound organizational decision-making."
            />
            <div className="rounded-md border border-navy-900/10 bg-steel-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
                Service Areas
              </p>
              <div className="mt-4 grid gap-2">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-navy-950 transition hover:bg-navy-900 hover:text-white"
                  >
                    {service.title.replace(" Services", "")}
                    <ArrowDownRight aria-hidden="true" size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8">
            {services.map((service, index) => (
              <ServicePanel key={service.title} service={service} index={index} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <section className="bg-steel-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-md border border-navy-900/10 bg-white p-8 shadow-subtle lg:flex-row lg:items-center lg:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-navy-950">Not sure which service fits?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-steel-700">
              Share the issue and context, and the right service path can be discussed.
            </p>
          </div>
          <Button type="button" onClick={() => setAssistantOpen(true)}>
            Start a Conversation
          </Button>
        </div>
      </section>
      <ServiceAssistant
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
}
