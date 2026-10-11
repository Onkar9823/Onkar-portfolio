// Decorative, code-inspired visual. The snippets are generic examples of the
// tools used (Python/pandas and SQL) — they are NOT real results or screenshots.

function Dots() {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
    </span>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-violet/15 blur-2xl" />

      <div className="relative space-y-4">
      

               <div className="flex flex-wrap gap-2">
          {[].map((t) => (
            <span key={t} className="chip font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
