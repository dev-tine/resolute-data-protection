import ContactForm from "../components/ContactForm.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="bg-navy-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Request a Consultation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel-200">
            Share a brief overview of your data protection, privacy, cybersecurity, training, research, or expert support needs.
          </p>
        </div>
      </section>

      <section className="bg-steel-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="What to Include"
              title="A concise overview is enough to start."
              body="Provide the context needed to understand the inquiry and route the conversation appropriately."
            />
            <ul className="mt-8 grid gap-4">
              {[
                "Organization or context",
                "Service area of interest",
                "Timeline or urgency",
                "Brief description of the issue",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-md border border-navy-900/10 bg-white p-4 text-steel-700">
                  <CheckCircle2 className="mt-1 shrink-0 text-navy-700" aria-hidden="true" size={18} strokeWidth={1.9} />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-md border border-navy-900/10 bg-white p-4 text-sm leading-6 text-steel-700">
              This prototype form validates fields in the browser only. Email delivery should be configured before launch.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
