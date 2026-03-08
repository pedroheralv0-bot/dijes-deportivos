interface SectionHeaderProps {
  number: string;
  title: string;
  description: string;
}

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-8 h-8 bg-gold rounded flex items-center justify-center text-black font-bold text-sm font-mono">
          {number}
        </span>
        <h2 className="text-2xl font-extrabold text-white">{title}</h2>
      </div>
      <p className="text-[#737373] text-sm ml-11">{description}</p>
    </div>
  );
}
