interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 flex-1">
      <div className="w-14 h-14 rounded-full bg-primary-dark flex items-center justify-center">
        <span className="text-[22px] font-bold text-white">{number}</span>
      </div>
      <h3 className="text-[17px] font-semibold text-text-heading text-center">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed text-center">{description}</p>
    </div>
  );
}
