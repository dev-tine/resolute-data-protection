import Button from "../components/Button.jsx";
import FounderCard from "../components/FounderCard.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About({ onNavigate }) {
  return (
    <>
      <PageHero title="About Resolute Data Protection" />

      <ScrollReveal as="section" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Mission"
            title="Purpose-built guidance for serious data protection questions."
          />
          <div className="space-y-6">
            <TextBlock
              title="Mission / Purpose"
              body="Resolute Data Protection exists to help organizations and decision-makers approach cybersecurity, privacy, and technology risk with discipline, clarity, and practical judgment."
            />
            <TextBlock
              title="Approach"
              body="The work is grounded in careful analysis, clear communication, and practical recommendations. The goal is to help clients understand risk, evaluate reasonable security practices, and make decisions that can be explained and sustained."
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-steel-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FounderCard variant="profile" />
        </div>
      </ScrollReveal>

      <section className="bg-navy-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Talk through your data protection needs.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-steel-200">
              Share the issue, service area, and timing so the next step can be evaluated clearly.
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

function PageHero({ title }) {
  return (
    <section className="bg-navy-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Resolute Data Protection</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
      </div>
    </section>
  );
}

function TextBlock({ title, body }) {
  return (
    <article className="rounded-md border border-navy-900/10 bg-steel-50 p-6">
      <h2 className="text-2xl font-semibold text-navy-950">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-steel-700">{body}</p>
    </article>
  );
}
