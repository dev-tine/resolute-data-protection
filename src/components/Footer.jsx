import { services, site } from "../data/site.js";
import SocialIcons from "./SocialIcons.jsx";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer({ onNavigate }) {
  const handleNavigate = (event, href) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.35fr_0.8fr_0.9fr_0.9fr] lg:gap-12 lg:px-8">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-3 text-sm font-semibold text-accent">{site.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-steel-200">
            Professional research, advisory, training, and expert support for privacy, cybersecurity, reasonable security, and technology risk matters.
          </p>
          <p className="mt-6 max-w-sm border-l border-white/15 pl-4 text-xs leading-6 text-steel-200">Prototype links and form behavior are for review only.</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Main Links</p>
          <nav aria-label="Footer navigation" className="mt-4 grid gap-3">
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-steel-200 transition hover:translate-x-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={(event) => handleNavigate(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Services</p>
          <nav aria-label="Footer services navigation" className="mt-4 grid gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`/services#${service.id}`}
                className="text-sm text-steel-200 transition hover:translate-x-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={(event) => handleNavigate(event, `/services#${service.id}`)}
              >
                {service.title.replace(" Services", "")}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Connect</p>
          <div className="mt-4">
            <SocialIcons />
          </div>
          <div className="mt-6 grid gap-3 text-sm text-steel-200">
            <a href="#" className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Privacy Statement</a>
            <a href="#" className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
