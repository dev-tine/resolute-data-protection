export default function SectionHeading({ eyebrow, title, body, align = "left", light = false }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-accent" : "text-navy-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-steel-200" : "text-steel-700"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
