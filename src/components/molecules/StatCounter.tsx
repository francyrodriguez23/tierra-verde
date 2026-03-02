interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="flex flex-col items-center gap-1 p-4 md:p-7 flex-1">
      <span className="text-2xl md:text-[32px] font-bold text-primary-dark">{value}</span>
      <span className="text-xs md:text-sm text-text-muted text-center">{label}</span>
    </div>
  );
}
