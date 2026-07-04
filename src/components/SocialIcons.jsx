import { Cloud, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hofftechpolicy?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  { label: "X / Twitter", icon: Twitter },
  { label: "Bluesky", icon: Cloud },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-3" aria-label="Social links">
      {socials.map(({ label, icon: Icon, href = "#" }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-steel-200 transition hover:-translate-y-0.5 hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
