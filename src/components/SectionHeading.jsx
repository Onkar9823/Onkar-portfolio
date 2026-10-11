export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
