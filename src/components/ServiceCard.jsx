import Button from "./Button.jsx";

export default function ServiceCard({ title, description, tags = [], href = "/services", onNavigate, dark = false }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-md border p-6 transition duration-200 hover:-translate-y-1 ${
        dark
          ? "border-white/15 bg-white/5 text-white hover:border-accent/70 hover:bg-white/10"
          : "border-navy-900/10 bg-white text-navy-950 shadow-sm hover:border-navy-700/35 hover:shadow-subtle"
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className={`mt-4 leading-7 ${dark ? "text-steel-200" : "text-steel-700"}`}>{description}</p>
      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                dark ? "bg-white/10 text-steel-200" : "bg-steel-100 text-navy-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto pt-6">
        <Button href={href} onNavigate={onNavigate} variant={dark ? "secondary" : "link"} className={dark ? "" : "rounded-none"}>
          Learn more
        </Button>
      </div>
    </article>
  );
}
