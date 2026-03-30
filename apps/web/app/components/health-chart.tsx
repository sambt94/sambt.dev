// ABOUTME: Client-only recharts component for the health dashboard dual-axis chart.
// ABOUTME: Shows daily glucose range (high/low/avg) + Oura readiness & HRV balance.
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceArea,
} from 'recharts';
import type { DailyDataPoint } from '~/routes/health';

interface TooltipEntry {
  dataKey: string;
  name: string;
  value: number | null;
  color: string;
  payload: DailyDataPoint;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload as DailyDataPoint | undefined;
  const periodLabel =
    d?.period === 'ski'
      ? 'Ski trip'
      : d?.period === 'illness'
        ? 'Illness'
        : d?.period === 'recovery'
          ? 'Recovery'
          : d?.period === 'cold'
            ? 'Cold'
            : 'At home';
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2.5 text-xs shadow-lg">
      <p className="font-normal text-copy">{label}</p>
      <p className="text-faint mb-1.5">{periodLabel}</p>
      {payload.map((p: TooltipEntry) => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.name}: {p.value != null ? p.value : '\u2014'}
          {p.dataKey.startsWith('gluc') ? ' mmol/L' : ''}
        </p>
      ))}
    </div>
  );
}

export default function HealthChart({ data }: { data: DailyDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <ReferenceArea x1="Mar 6" x2="Mar 14" fill="#f59e0b" fillOpacity={0.08} />
        <ReferenceArea x1="Mar 15" x2="Mar 18" fill="#ef4444" fillOpacity={0.08} />
        <ReferenceArea x1="Mar 19" x2="Mar 22" fill="#4ade80" fillOpacity={0.08} />
        <ReferenceArea x1="Mar 23" x2="Mar 28" fill="#60a5fa" fillOpacity={0.08} />

        <XAxis
          dataKey="date"
          tick={{ fontSize: 10, fill: 'var(--color-faint)' }}
          stroke="var(--color-border)"
          interval={2}
          angle={-35}
          textAnchor="end"
          height={50}
        />
        <YAxis
          yAxisId="glucose"
          domain={[0, 13]}
          tick={{ fontSize: 10, fill: 'var(--color-faint)' }}
          stroke="var(--color-border)"
          label={{
            value: 'Glucose (mmol/L)',
            angle: -90,
            position: 'insideLeft',
            style: { fontSize: 10, fill: 'var(--color-muted)' },
          }}
        />
        <YAxis
          yAxisId="oura"
          orientation="right"
          domain={[0, 100]}
          tick={{ fontSize: 10, fill: 'var(--color-faint)' }}
          stroke="var(--color-border)"
          label={{
            value: 'Oura Score',
            angle: 90,
            position: 'insideRight',
            style: { fontSize: 10, fill: 'var(--color-muted)' },
          }}
        />

        <ReferenceLine
          yAxisId="glucose"
          y={7.8}
          stroke="#ef4444"
          strokeDasharray="4 4"
          strokeOpacity={0.4}
          label={{ value: '7.8', position: 'left', fontSize: 9, fill: '#ef4444' }}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 11 }}
          formatter={(value: string) => (
            <span style={{ color: 'var(--color-muted)' }}>{value}</span>
          )}
        />

        <Line
          yAxisId="glucose"
          dataKey="glucHigh"
          name="Daily High"
          stroke="#f97316"
          strokeWidth={1.5}
          dot={{ r: 2.5 }}
          connectNulls={false}
        />
        <Line
          yAxisId="glucose"
          dataKey="glucAvg"
          name="Daily Avg"
          stroke="#eab308"
          strokeWidth={2}
          dot={{ r: 2.5 }}
          connectNulls={false}
        />
        <Line
          yAxisId="glucose"
          dataKey="glucLow"
          name="Daily Low"
          stroke="#3b82f6"
          strokeWidth={1.5}
          dot={{ r: 2.5 }}
          connectNulls={false}
        />
        <Line
          yAxisId="oura"
          dataKey="readiness"
          name="Readiness"
          stroke="#10b981"
          strokeWidth={1.5}
          dot={{ r: 2.5 }}
        />
        <Line
          yAxisId="oura"
          dataKey="hrvBal"
          name="HRV Balance"
          stroke="#8b5cf6"
          strokeWidth={1.5}
          strokeDasharray="5 3"
          dot={{ r: 2 }}
          connectNulls={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
