import { Check, Circle, Loader2 } from 'lucide-react';

// ---------------------------------------------------------------------------
// Visuals for project cards. They are intentionally abstract: wireframes and
// status diagrams only. They contain NO numbers, so they cannot be mistaken
// for real results.
// ---------------------------------------------------------------------------

const DASHBOARD_LAYOUTS = {
  hr: {
    kpis: ['Headcount', 'Attrition', 'Satisfaction'],
    leftTitle: 'Workforce by department',
    rightTitle: 'Job satisfaction',
  },
  sales: {
    kpis: ['Sales', 'Revenue', 'Profit'],
    leftTitle: 'Performance trend',
    rightTitle: 'Product / region',
  },
};

function DashboardWireframe({ variant }) {
  const layout = DASHBOARD_LAYOUTS[variant] || DASHBOARD_LAYOUTS.hr;
  const isSales = variant === 'sales';

  return (
    <figure className="m-0">
      <svg viewBox="0 0 320 180" role="img" aria-label={`Illustrative layout of the ${layout.leftTitle} dashboard. Not real data.`} className="block h-auto w-full">
        <rect x="0.5" y="0.5" width="319" height="179" rx="10" className="fill-elevated stroke-line" />

        {/* KPI cards */}
        {layout.kpis.map((label, i) => (
          <g key={label} transform={`translate(${12 + i * 100} 12)`}>
            <rect width="92" height="40" rx="6" className="fill-surface stroke-line" />
            <text x="8" y="16" fontSize="9" className="fill-muted">
              {label}
            </text>
            <rect x="8" y="23" width="36" height="8" rx="3" className="fill-accent/40" />
          </g>
        ))}

        {/* Left panel */}
        <g transform="translate(12 62)">
          <rect width="190" height="106" rx="6" className="fill-surface stroke-line" />
          <text x="8" y="15" fontSize="9" className="fill-muted">
            {layout.leftTitle}
          </text>
          {isSales ? (
            <path
              d="M12 88 L48 70 L84 78 L120 52 L156 58 L180 36"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-accent"
            />
          ) : (
            [0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x="12" y={26 + i * 15} width={[110, 84, 130, 66, 98][i]} height="9" rx="2" className="fill-accent/50" />
            ))
          )}
        </g>

        {/* Right panel */}
        <g transform="translate(210 62)">
          <rect width="98" height="106" rx="6" className="fill-surface stroke-line" />
          <text x="8" y="15" fontSize="9" className="fill-muted">
            {layout.rightTitle}
          </text>
          {isSales ? (
            [0, 1, 2, 3].map((i) => (
              <rect key={i} x={12 + i * 21} y={96 - [34, 56, 44, 26][i]} width="14" height={[34, 56, 44, 26][i]} rx="2" className={i % 2 ? 'fill-violet/50' : 'fill-accent/50'} />
            ))
          ) : (
            <>
              <circle cx="49" cy="62" r="24" fill="none" strokeWidth="10" className="stroke-violet/40" />
              <circle cx="49" cy="62" r="24" fill="none" strokeWidth="10" strokeDasharray="60 91" transform="rotate(-90 49 62)" className="stroke-accent/60" />
            </>
          )}
        </g>
      </svg>
      <figcaption className="mt-2 text-[11px] text-muted">Illustrative layout · not real data</figcaption>
    </figure>
  );
}

const STATUS_META = {
  done: { label: 'Implemented', Icon: Check, text: 'text-accent', ring: 'border-accent/50 bg-accent/10' },
  progress: { label: 'In progress', Icon: Loader2, text: 'text-violet', ring: 'border-violet/50 bg-violet/10' },
  planned: { label: 'Planned', Icon: Circle, text: 'text-muted', ring: 'border-dashed border-line bg-transparent' },
};

function Pipeline({ steps }) {
  return (
    <figure className="m-0">
      <ol className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2" aria-label="Project progress by stage">
        {steps.map((step, i) => {
          const meta = STATUS_META[step.status] || STATUS_META.planned;
          const { Icon } = meta;
          return (
            <li key={step.label} className={`flex items-start gap-2 rounded-lg border px-3 py-2 ${meta.ring}`}>
              <Icon size={14} className={`mt-0.5 shrink-0 ${meta.text}`} aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs font-medium leading-snug text-fg">
                  <span className="font-mono text-muted">{i + 1}. </span>
                  {step.label}
                </span>
                <span className={`block text-[11px] ${meta.text}`}>{meta.label}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

export default function ProjectVisual({ diagram }) {
  if (!diagram) return null;
  if (diagram.type === 'pipeline') return <Pipeline steps={diagram.steps} />;
  return <DashboardWireframe variant={diagram.variant} />;
}
