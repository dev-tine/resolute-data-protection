import { BadgeCheck, CheckCircle2, CircleDot, FileText, Network, Scale, Shield } from "lucide-react";
import Button from "../components/Button.jsx";
import FounderCard from "../components/FounderCard.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { approachSteps, homepageFocus, services } from "../data/site.js";

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Legal, privacy, and cybersecurity advisory
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Defending Data. Protecting People.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-200 sm:text-xl">
              Strategic guidance for cybersecurity, privacy, technology policy, and reasonable security challenges.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" onNavigate={onNavigate} variant="primary">
                Request Consultation
              </Button>
              <Button href="/services" onNavigate={onNavigate} variant="secondary">
                Explore Services
              </Button>
            </div>
            <p className="mt-7 max-w-2xl border-l border-accent/70 pl-4 text-sm leading-6 text-steel-200">
              Research, advisory, training, and expert support for complex data protection matters.
            </p>
          </div>
          <SecurityVisual />
        </div>
      </section>

      <section className="border-b border-navy-900/10 bg-white px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {homepageFocus.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-navy-900/10 bg-steel-50 px-4 py-4">
              <BadgeCheck aria-hidden="true" className="shrink-0 text-navy-700" size={19} strokeWidth={1.9} />
              <p className="text-sm font-semibold text-navy-950">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <ScrollReveal as="section" className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">
              Decision Support
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
              Guidance for organizations facing complex data protection decisions.
            </h2>
          </div>

          <div className="rounded-md border border-navy-900/10 bg-steel-50 p-6 sm:p-8">
            <p className="text-lg leading-8 text-steel-700">
              Resolute Data Protection helps decision-makers evaluate risk, communicate clearly, and take practical steps across privacy, cybersecurity, compliance, and emerging technology challenges.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Evaluate risk", "Clarify obligations", "Support decisions"].map((item) => (
                <div key={item} className="rounded-md border border-navy-900/10 bg-white px-4 py-3">
                  <p className="text-sm font-semibold text-navy-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-steel-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Specialized support for high-consequence questions."
            body="Four focused service areas help organizations move from uncertainty to informed action."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                href={`/services#${service.id}`}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" id="approach" className="bg-navy-900 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Approach"
            title="A disciplined approach to data protection."
            body="The work is structured to clarify facts, evaluate expectations, and support decisions with grounded recommendations."
            light
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {approachSteps.map((step, index) => (
              <article key={step.title} className="rounded-md border border-white/15 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-accent/70">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-steel-200">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Founder"
              title="Expert-led guidance across privacy, cybersecurity, and technology policy."
              body="Led by David Hoffman, Resolute Data Protection brings senior-level experience across cybersecurity policy, global privacy, legal strategy, and public policy to help organizations work through serious data protection questions."
            />
            <div className="mt-8">
              <Button href="/about" onNavigate={onNavigate} variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <FounderCard variant="preview" />
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-steel-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why work with us" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Clear, practical guidance",
              "Evidence-informed recommendations",
              "Experience across law, policy, privacy, and security",
              "Communication that supports decision-making",
            ].map((point) => (
              <div key={point} className="rounded-md border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:border-navy-700/35 hover:shadow-subtle">
                <CheckCircle2 className="text-navy-700" aria-hidden="true" size={24} strokeWidth={1.8} />
                <p className="mt-5 text-lg font-semibold leading-7 text-navy-950">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <section className="bg-navy-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Discuss a data protection matter.
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel-200">
              Whether the need involves research, advisory support, training, or expert analysis, Resolute Data Protection can help clarify the next step.
            </p>
          </div>
          <Button href="/contact" onNavigate={onNavigate} variant="primary">
            Request Consultation
          </Button>
        </div>
      </section>
    </>
  );
}

function SecurityVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="aspect-square rounded-md border border-white/15 bg-white/[0.035] p-5 shadow-subtle">
        <div className="grid h-full grid-cols-5 grid-rows-5 gap-3">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className={`rounded-md border border-white/10 ${
                [2, 6, 12, 18, 22].includes(index) ? "bg-accent/20" : "bg-white/[0.025]"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-accent/60 bg-navy-950/90">
        <Shield size={64} strokeWidth={1.4} className="text-accent" />
      </div>
      <div className="absolute right-12 top-12 flex h-16 w-16 items-center justify-center rounded-md border border-white/15 bg-navy-900 text-accent">
        <FileText size={27} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-16 left-10 flex h-16 w-16 items-center justify-center rounded-md border border-white/15 bg-navy-900 text-accent">
        <Scale size={27} strokeWidth={1.5} />
      </div>
      <CircleDot className="absolute left-8 top-10 text-accent" size={22} strokeWidth={1.6} />
      <Network className="absolute bottom-8 right-10 text-accent" size={28} strokeWidth={1.6} />
    </div>
  );
}
