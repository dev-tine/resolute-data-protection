import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "min-h-11 bg-white text-navy-950 shadow-sm hover:-translate-y-0.5 hover:bg-steel-100 focus-visible:outline-white",
  secondary:
    "min-h-11 border border-white/35 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-white",
  dark: "min-h-11 bg-navy-900 text-white shadow-sm hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline-navy-900",
  outline:
    "min-h-11 border border-navy-900/20 text-navy-900 hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-white focus-visible:outline-navy-900",
  link: "px-0 py-0 text-navy-800 hover:text-navy-950 focus-visible:outline-navy-900",
};

export default function Button({
  children,
  href,
  onNavigate,
  onClick,
  variant = "dark",
  type = "button",
  className = "",
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={(event) => {
          if (!onNavigate) return;
          event.preventDefault();
          onNavigate(href);
        }}
      >
        {children}
        <ArrowRight aria-hidden="true" size={17} strokeWidth={1.9} />
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
