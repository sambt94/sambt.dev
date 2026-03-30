// ABOUTME: Password-gated health dashboard for Dr Lelde — tabbed layout matching sambt.dev design.
// ABOUTME: Three tabs: Summary (chart + report), Bloodwork (PDF download), Nutrition (xlsx + recipes).
import { useState, useEffect, lazy, Suspense } from 'react';
import { json, type MetaFunction, type ActionFunctionArgs } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';

export const handle = { hideChrome: true };

export const meta: MetaFunction = () => [
  { title: 'Health Dashboard — Sam' },
  { name: 'robots', content: 'noindex, nofollow' },
];

// Server-side password validation — password never sent to the client
export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const pw = ((form.get('password') as string) || '').toLowerCase().trim();
  const correct = process.env.HEALTH_PASSWORD || 'PLACEHOLDER_SET_ENV_VAR';
  if (pw === correct) {
    return json({ ok: true });
  }
  return json({ ok: false, error: 'Incorrect password' }, { status: 401 });
}

const dailyData = [
  {
    date: 'Feb 23',
    glucLow: 2.7,
    glucHigh: 10.1,
    glucAvg: 5.4,
    readiness: 83,
    hrvBal: null,
    period: 'home',
  },
  {
    date: 'Feb 24',
    glucLow: 2.7,
    glucHigh: 9.3,
    glucAvg: 5.9,
    readiness: 83,
    hrvBal: null,
    period: 'home',
  },
  {
    date: 'Feb 25',
    glucLow: 2.2,
    glucHigh: 8.0,
    glucAvg: 5.4,
    readiness: 78,
    hrvBal: null,
    period: 'home',
  },
  {
    date: 'Feb 26',
    glucLow: 2.2,
    glucHigh: 8.3,
    glucAvg: 5.2,
    readiness: 80,
    hrvBal: null,
    period: 'home',
  },
  {
    date: 'Feb 27',
    glucLow: 3.3,
    glucHigh: 8.3,
    glucAvg: 5.5,
    readiness: 86,
    hrvBal: 87,
    period: 'home',
  },
  {
    date: 'Feb 28',
    glucLow: 2.8,
    glucHigh: 8.1,
    glucAvg: 5.3,
    readiness: 90,
    hrvBal: 87,
    period: 'home',
  },
  {
    date: 'Mar 1',
    glucLow: 3.9,
    glucHigh: 8.6,
    glucAvg: 5.6,
    readiness: 89,
    hrvBal: 89,
    period: 'home',
  },
  {
    date: 'Mar 2',
    glucLow: 4.2,
    glucHigh: 10.1,
    glucAvg: 5.8,
    readiness: 87,
    hrvBal: 88,
    period: 'home',
  },
  {
    date: 'Mar 3',
    glucLow: 3.7,
    glucHigh: 8.4,
    glucAvg: 5.3,
    readiness: 87,
    hrvBal: 89,
    period: 'home',
  },
  {
    date: 'Mar 4',
    glucLow: 3.4,
    glucHigh: 8.6,
    glucAvg: 4.9,
    readiness: 72,
    hrvBal: 86,
    period: 'home',
  },
  {
    date: 'Mar 5',
    glucLow: 3.5,
    glucHigh: 8.2,
    glucAvg: 5.2,
    readiness: 90,
    hrvBal: 89,
    period: 'home',
  },
  {
    date: 'Mar 6',
    glucLow: 2.2,
    glucHigh: 8.9,
    glucAvg: 6.6,
    readiness: 95,
    hrvBal: 88,
    period: 'ski',
  },
  {
    date: 'Mar 7',
    glucLow: 3.6,
    glucHigh: 9.7,
    glucAvg: 6.3,
    readiness: 71,
    hrvBal: 85,
    period: 'ski',
  },
  {
    date: 'Mar 8',
    glucLow: 4.4,
    glucHigh: 8.9,
    glucAvg: 5.9,
    readiness: 85,
    hrvBal: 88,
    period: 'ski',
  },
  {
    date: 'Mar 9',
    glucLow: 3.8,
    glucHigh: 9.3,
    glucAvg: 5.5,
    readiness: 84,
    hrvBal: 86,
    period: 'ski',
  },
  {
    date: 'Mar 10',
    glucLow: 3.3,
    glucHigh: 11.6,
    glucAvg: 5.5,
    readiness: 84,
    hrvBal: 87,
    period: 'ski',
  },
  {
    date: 'Mar 11',
    glucLow: 3.8,
    glucHigh: 8.3,
    glucAvg: 5.6,
    readiness: 87,
    hrvBal: 86,
    period: 'ski',
  },
  {
    date: 'Mar 12',
    glucLow: 3.2,
    glucHigh: 11.3,
    glucAvg: 5.9,
    readiness: 68,
    hrvBal: 85,
    period: 'ski',
  },
  {
    date: 'Mar 13',
    glucLow: 2.8,
    glucHigh: 9.7,
    glucAvg: 5.2,
    readiness: 80,
    hrvBal: 86,
    period: 'ski',
  },
  {
    date: 'Mar 14',
    glucLow: 2.5,
    glucHigh: 9.4,
    glucAvg: 4.6,
    readiness: 77,
    hrvBal: 79,
    period: 'ski',
  },
  {
    date: 'Mar 15',
    glucLow: null,
    glucHigh: null,
    glucAvg: null,
    readiness: 91,
    hrvBal: 87,
    period: 'illness',
  },
  {
    date: 'Mar 16',
    glucLow: null,
    glucHigh: null,
    glucAvg: null,
    readiness: 79,
    hrvBal: 78,
    period: 'illness',
  },
  {
    date: 'Mar 17',
    glucLow: null,
    glucHigh: null,
    glucAvg: null,
    readiness: 31,
    hrvBal: 66,
    period: 'illness',
  },
  {
    date: 'Mar 18',
    glucLow: 3.8,
    glucHigh: 7.0,
    glucAvg: 5.8,
    readiness: 70,
    hrvBal: 82,
    period: 'illness',
  },
  {
    date: 'Mar 19',
    glucLow: 4.2,
    glucHigh: 6.6,
    glucAvg: 5.3,
    readiness: 75,
    hrvBal: 72,
    period: 'recovery',
  },
  {
    date: 'Mar 20',
    glucLow: 2.6,
    glucHigh: 6.4,
    glucAvg: 4.8,
    readiness: null,
    hrvBal: null,
    period: 'recovery',
  },
  {
    date: 'Mar 21',
    glucLow: 2.8,
    glucHigh: 7.1,
    glucAvg: 5.0,
    readiness: null,
    hrvBal: null,
    period: 'recovery',
  },
  {
    date: 'Mar 22',
    glucLow: null,
    glucHigh: null,
    glucAvg: null,
    readiness: null,
    hrvBal: null,
    period: 'recovery',
  },
  {
    date: 'Mar 23',
    glucLow: 3.6,
    glucHigh: 8.2,
    glucAvg: 5.3,
    readiness: null,
    hrvBal: null,
    period: 'cold',
  },
  {
    date: 'Mar 24',
    glucLow: 3.4,
    glucHigh: 10.1,
    glucAvg: 5.4,
    readiness: 81,
    hrvBal: 86,
    period: 'cold',
  },
  {
    date: 'Mar 25',
    glucLow: 4.5,
    glucHigh: 9.6,
    glucAvg: 6.2,
    readiness: 86,
    hrvBal: null,
    period: 'cold',
  },
  {
    date: 'Mar 26',
    glucLow: 4.2,
    glucHigh: 7.9,
    glucAvg: 5.7,
    readiness: 78,
    hrvBal: 84,
    period: 'cold',
  },
  {
    date: 'Mar 27',
    glucLow: 4.1,
    glucHigh: 8.9,
    glucAvg: 5.9,
    readiness: 78,
    hrvBal: 90,
    period: 'cold',
  },
  {
    date: 'Mar 28',
    glucLow: 4.8,
    glucHigh: 9.0,
    glucAvg: 6.0,
    readiness: 72,
    hrvBal: 85,
    period: 'cold',
  },
];

export type DailyDataPoint = (typeof dailyData)[number];

const tabs = ['Summary', 'Bloodwork', 'Nutrition'] as const;
type Tab = (typeof tabs)[number];

// --- Password Gate ---

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const fetcher = useFetcher<{ ok: boolean; error?: string }>();
  const [pw, setPw] = useState('');
  const isSubmitting = fetcher.state !== 'idle';
  const error = fetcher.data && !fetcher.data.ok;

  useEffect(() => {
    if (fetcher.data?.ok) onUnlock();
  }, [fetcher.data, onUnlock]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <fetcher.Form method="post" className="w-full max-w-[320px] mx-md opacity-0 animate-fade-in">
        <h1 className="font-serif font-light text-2xl text-copy mb-xs">Health Dashboard</h1>
        <p className="text-sm text-muted mb-md">Enter the password to view</p>
        <input
          type="password"
          name="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
          placeholder="Password"
          className="w-full bg-transparent border border-border rounded-lg px-3 py-2.5 text-sm text-copy placeholder:text-faint focus:border-muted focus:outline-none transition-colors duration-300"
          autoFocus
        />
        {error && <p className="mt-xs text-sm text-red-400">Incorrect password</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-sm w-full rounded-lg bg-pill border border-border px-4 py-2.5 text-sm text-copy font-normal hover:bg-border transition-colors duration-300 cursor-pointer"
        >
          {isSubmitting ? 'Checking...' : 'View Dashboard'}
        </button>
      </fetcher.Form>
    </div>
  );
}

// --- Tab Navigation (pill style matching site nav) ---

function TabNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex gap-0.5 p-1.5 bg-nav-bg border border-nav-border rounded-full text-sm backdrop-blur-[20px] backdrop-saturate-[180%] w-fit">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors duration-300 cursor-pointer ${
            active === tab ? 'bg-pill text-copy font-normal' : 'text-muted hover:text-copy'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// --- Summary Tab ---

const HealthChart = lazy(() => import('~/components/health-chart'));

function SummaryTab() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <div className="space-y-md">
      {/* Period legend */}
      <div className="flex flex-wrap gap-md text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-faint" /> At home
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500" /> Ski trip
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-red-400" /> Food poisoning
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-400" /> Cold
        </span>
      </div>

      {/* Chart */}
      <div className="border border-border rounded-lg p-sm sm:p-md">
        <h2 className="text-[0.9375rem] text-copy font-normal mb-sm">
          Daily Glucose Range vs Oura Readiness
        </h2>
        <div className="h-[360px] sm:h-[440px]">
          {isClient ? (
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-sm text-faint">
                  Loading chart...
                </div>
              }
            >
              <HealthChart data={dailyData} />
            </Suspense>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-faint">
              Loading chart...
            </div>
          )}
        </div>
      </div>

      {/* Written report */}
      <div className="space-y-md text-sm text-muted leading-relaxed">
        <section>
          <h3 className="text-copy text-[0.9375rem] font-normal mb-xs">CGM Overview</h3>
          <p>
            34 days of monitoring (Feb 23 – Mar 28), with gaps during food poisoning (Mar 15–17) and
            sensor change (Mar 22). Overall average glucose{' '}
            <strong className="text-copy">5.5 mmol/L</strong>, equivalent to an HbA1c of ~5.0% —
            excellent metabolic health. Weekly CV% of 16.5% and 94.3% time in range (3.9–7.8 mmol/L)
            during the latest week.
          </p>
          <p className="mt-xs">
            Home-cooked meals consistently keep glucose under 8.0 mmol/L. The biggest spikes came
            from carb-heavy restaurant food: <strong className="text-copy">11.6 mmol/L</strong>{' '}
            (Kaiserspätzle + Weissbier, Mar 10),
            <strong className="text-copy"> 11.3 mmol/L</strong> (Tiroler Gröstl, Mar 12), and
            <strong className="text-copy"> 10.1 mmol/L</strong> (wholewheat farfalle, Mar 24).
            Post-recovery meals (Mar 20–21) showed the flattest glucose of the entire period — avg
            4.8–5.0, never exceeding 7.1.
          </p>
        </section>

        <section>
          <h3 className="text-copy text-[0.9375rem] font-normal mb-xs">Oura Recovery Pattern</h3>
          <p>
            Baseline readiness at home averaged <strong className="text-copy">83.4</strong> with HRV
            balance 86–89 — consistent with Sam&apos;s long-term average nightly HRV of 112ms (top
            1–2% for any age group). The ski trip showed gradual readiness erosion from insufficient
            recovery between active days plus daily alcohol. Food poisoning crashed readiness to{' '}
            <strong className="text-copy">31</strong> on Mar 17, with temperature deviation spiking
            +1.29°C above baseline.
          </p>
          <p className="mt-xs">
            Latest week (Mar 23–28): a cold affected sleep and readiness throughout. Sleep scores
            ranged 70–82, readiness 72–86, and Oura flagged every day as &quot;stressful.&quot;
            Sunday Mar 29 showed strong recovery with a sleep score of{' '}
            <strong className="text-copy">95</strong> and readiness back to{' '}
            <strong className="text-copy">80</strong>. HRV balance recovering toward baseline (85–90
            range).
          </p>
        </section>

        <section>
          <h3 className="text-copy text-[0.9375rem] font-normal mb-xs">Overnight Lows</h3>
          <p>
            Several overnight readings dip to 2.2–2.8 mmol/L, particularly in earlier weeks. Overall
            glucose variability is low — weekly CV% of 16.5% (target &lt;33%) and daily standard
            deviation typically 0.7–1.0 mmol/L. The latest week showed two overnight lows below 3.9
            (Mon 3.6, Tue 3.4) but these may be exacerbated by reduced appetite during the cold. The
            lows are likely CGM compression artifacts (sleeping on sensor arm) given there are no
            symptoms, but worth confirming.
          </p>
        </section>

        <section>
          <h3 className="text-copy text-[0.9375rem] font-normal mb-xs">Lifestyle Context</h3>
          <p>
            <strong className="text-copy">Alcohol:</strong> Quit Feb 23. Remained alcohol-free until
            ski trip (Mar 6–14, 2–4 beers/day). Post-trip: back to zero. Clear CGM correlation —
            beer amplifies spikes.
          </p>
          <p className="mt-xs">
            <strong className="text-copy">Supplements:</strong> Methylfolate, fish oil, P5P (B6)
            50mg/day, riboflavin (B2) 25–50mg/day.
          </p>
        </section>

        <section>
          <h3 className="text-copy text-[0.9375rem] font-normal mb-xs">Questions for Discussion</h3>
          <ul className="list-disc pl-md space-y-xs">
            <li>Overnight lows — compression artifacts or genuine hypoglycaemia?</li>
            <li>Alcohol + carb synergy — how much of a priority given healthy HOMA-IR (0.98)?</li>
            <li>
              LDL persistently elevated (3.45–3.82 across 3 tests) with bilateral family history of
              CVD and mother on statins — next steps?
            </li>
            <li>
              Homocysteine still elevated (18.43) despite methylfolate — B6/B2 trial underway,
              retest timing?
            </li>
            <li>Recovery from food poisoning — nutritional considerations for rebuilding?</li>
            <li>Overall nutrition programme goals and meal plan direction going forward?</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// --- Bloodwork Tab ---

function BloodworkTab() {
  return (
    <div className="space-y-md">
      <p className="text-sm text-muted leading-relaxed">
        Blood tests taken Feb 25, 2026 at E. Gulbja Laboratorija, Riga. Full panel including
        metabolic markers, lipids, vitamins, and thyroid.
      </p>

      <a
        href="/health/bloodwork-feb2026.pdf"
        download
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-copy hover:bg-pill transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download blood work (PDF)
      </a>

      <div className="border-t border-border pt-md text-sm text-muted leading-relaxed space-y-sm">
        <h3 className="text-copy text-[0.9375rem] font-normal">Key Highlights</h3>
        <div className="space-y-xs">
          <p>
            <strong className="text-copy">Metabolic:</strong> Fasting glucose 5.0 mmol/L, insulin
            4.5 mU/L, HOMA-IR 0.98 — excellent insulin sensitivity.
          </p>
          <p>
            <strong className="text-copy">Lipids:</strong> Total cholesterol 5.18, LDL 3.14 (mildly
            elevated), HDL 1.60 (good), triglycerides 0.97. ApoB not yet tested.
          </p>
          <p>
            <strong className="text-copy">Vitamins:</strong> B12 high-normal (636), folate adequate
            (15.7). Vitamin D borderline-low (56.2 nmol/L) — may warrant supplementation.
          </p>
          <p>
            <strong className="text-copy">Thyroid:</strong> TSH 1.71, fT4 15.9, fT3 5.6 — all
            optimal.
          </p>
          <p>
            <strong className="text-copy">Inflammation:</strong> hsCRP 0.18 — very low, excellent.
          </p>
          <p>
            <strong className="text-copy">Homocysteine:</strong> 12.5 µmol/L — mildly elevated.
            B6+B2 supplementation started Feb 25. Retest recommended at 3 months.
          </p>
        </div>
      </div>

      <div className="border-t border-border pt-md text-sm text-muted leading-relaxed space-y-sm">
        <h3 className="text-copy text-[0.9375rem] font-normal">Family Cardiovascular History</h3>
        <p>
          Bilateral family history of cardiovascular disease. Mother (first-degree relative) is on
          statins for atherosclerosis. Paternal grandfather and maternal grandmother both had heart
          surgery. Maternal grandfather (87) has bradycardia requiring a pacemaker — potentially
          related to Sam&apos;s constitutional low resting heart rate (avg 44bpm, lowest 36bpm).
        </p>
        <p>
          LDL has been persistently elevated across all three tests (3.45–3.82 mmol/L, Oct 2024 –
          Feb 2026) with an ApoB/ApoA1 ratio of 0.73 (high-risk bracket). Lipoprotein(a) is normal
          (&lt;10 mg/dL), ruling out that genetic risk factor.
        </p>
      </div>
    </div>
  );
}

// --- Nutrition Tab ---

function NutritionTab() {
  return (
    <div className="space-y-md">
      <p className="text-sm text-muted leading-relaxed">
        Complete food diary covering Feb 23 – Mar 29, 2026. Includes all meals, estimated macros per
        portion, and glucose notes where CGM data was available.
      </p>

      <a
        href="/health/meal-diary-feb-mar-2026.xlsx"
        download
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-copy hover:bg-pill transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download food diary (XLSX)
      </a>

      <div className="border-t border-border pt-md">
        <h3 className="text-copy text-[0.9375rem] font-normal mb-sm">Sample Home Recipes</h3>
        <p className="text-sm text-muted leading-relaxed mb-sm">
          Representative meals from the monitoring period. Home cooking is predominantly vegetarian,
          tofu-heavy, 20–34g protein per portion, ready in 30 minutes. These meals consistently keep
          glucose under 8.0 mmol/L.
        </p>

        <div className="space-y-sm">
          <RecipeCard
            name="Shredded tofu rice bowl"
            cuisine="Japanese"
            protein={34}
            time="30min"
            note="Favourite. No-cook poke-style bowl. Eaten Mar 9 + Mar 18–19."
          />
          <RecipeCard
            name="Viral Turkish pasta with spiced tofu mince"
            cuisine="Middle Eastern / Italian"
            protein={32}
            time="30min"
            note="Batch-friendly, freezer-friendly. Tofu mince base used in rice bowls too."
          />
          <RecipeCard
            name="Creamy gochujang pasta"
            cuisine="Chinese-Korean fusion"
            protein={22}
            time="30min"
            note="Eaten Mar 11. Quick weeknight meal."
          />
          <RecipeCard
            name="Braised tofu with sour yoghurt and spinach"
            cuisine="Indian (Ottolenghi)"
            protein={20}
            time="30min"
            note="Favourite. Served with rice or quinoa."
          />
        </div>
      </div>
    </div>
  );
}

function RecipeCard({
  name,
  cuisine,
  protein,
  time,
  note,
}: {
  name: string;
  cuisine: string;
  protein: number;
  time: string;
  note: string;
}) {
  return (
    <div className="border border-border rounded-lg p-sm">
      <p className="text-[0.9375rem] text-copy font-normal">{name}</p>
      <p className="text-xs text-faint mt-0.5">
        {cuisine} · {protein}g protein · {time}
      </p>
      <p className="text-sm text-muted mt-xs">{note}</p>
    </div>
  );
}

// --- Dashboard Shell ---

function Dashboard() {
  const [tab, setTab] = useState<Tab>('Summary');

  return (
    <div className="max-w-content mx-auto px-md pb-xl">
      <div className="pt-xl opacity-0 animate-fade-in">
        <p className="text-sm text-copy tracking-[0.01em]">Sam Middleton Beattie</p>
        <p className="text-[0.8125rem] text-muted">Health Dashboard</p>
      </div>

      <div className="mt-md mb-md">
        <h1
          className="font-serif font-light leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
        >
          Pre-call Summary
        </h1>
        <p className="mt-xs text-sm text-muted">
          Prepared for Dr Lelde Klemente · Feb 23 – Mar 28, 2026
        </p>
      </div>

      <div className="mb-md">
        <TabNav active={tab} onChange={setTab} />
      </div>

      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {tab === 'Summary' && <SummaryTab />}
        {tab === 'Bloodwork' && <BloodworkTab />}
        {tab === 'Nutrition' && <NutritionTab />}
      </div>

      <footer className="mt-xl text-center text-xs text-faint">
        Data: Dexcom ONE+ CGM, Oura Ring, E. Gulbja Laboratorija.
      </footer>
    </div>
  );
}

// --- Page Root ---

export default function HealthPage() {
  const [unlocked, setUnlocked] = useState(false);
  return unlocked ? <Dashboard /> : <PasswordGate onUnlock={() => setUnlocked(true)} />;
}
