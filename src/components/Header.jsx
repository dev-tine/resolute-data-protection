import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navLinks, site } from "../data/site.js";
import Button from "./Button.jsx";

export default function Header({ currentPath, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (href) => {
    setOpen(false);
    onNavigate(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-all duration-200 ${
        scrolled ? "border-navy-900/10 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center transition hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-900"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
        >
          <img src={logo} alt={site.name} className="h-10 w-auto sm:h-12" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition hover:text-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-900 ${
                currentPath === link.href ? "text-navy-950" : "text-steel-700"
              }`}
              onClick={(event) => {
                event.preventDefault();
                navigate(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <Button href="/contact" onNavigate={navigate}>
            Request Consultation
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-900/15 text-navy-900 transition hover:bg-steel-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-navy-900/10 bg-white px-5 py-5 shadow-subtle lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-3 text-sm font-semibold transition hover:bg-steel-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 ${
                  currentPath === link.href ? "bg-steel-100 text-navy-950" : "text-steel-700"
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <Button href="/contact" onNavigate={navigate} className="mt-2 w-full">
              Request Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
