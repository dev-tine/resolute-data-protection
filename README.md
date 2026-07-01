# Resolute Data Protection

Static React + Vite + Tailwind CSS prototype for a professional legal, cybersecurity, privacy, and data protection advisory website.

## Features

- Four-page static website: Home, About, Services, and Contact.
- Premium legal/advisory visual style with navy, slate, white, and muted blue accents.
- Responsive sticky header with desktop navigation and mobile menu.
- Professional homepage with hero, focus strip, service overview, approach section, founder preview, reasons to work together, and final CTA.
- About page with full founder profile, credibility-focused copy, photo, education line, perspective note, and areas of focus.
- Services page with professional service panels for:
  - Cutting Edge Research
  - Expert Witness Services
  - Advisory Services
  - Training Services
- Frontend-only Service Guidance Assistant that recommends a service path through a guided question flow.
- Contact page with accessible frontend validation and prototype-only success message.
- Query-string service preselection from the assistant, such as `/contact?service=Advisory%20Services`.
- Subtle scroll reveal and hover transitions with reduced-motion support.
- GitHub Pages deployment workflow included.

## Prototype Notes

- The contact form does not send email.
- The Service Guidance Assistant does not use an AI API.
- No backend services, API keys, user storage, or real email delivery are connected.
- Assistant guidance is general service guidance only and does not provide legal advice or create a client relationship.
- Social, privacy, and terms links are placeholders.

## Local Development

```bash
npm install
npm run dev
```

Local site:

```text
http://127.0.0.1:5173
```

