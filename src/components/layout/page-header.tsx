interface PageHeaderProps {
  subtitle: string;
  title: string;
  titleAccent: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHeader({ subtitle, title, titleAccent, description, children }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-dark via-body to-dark py-16 px-6 text-center">
      <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">{subtitle}</p>
      <h1 className="text-white text-4xl font-extrabold mb-3">
        {title} <span className="text-gold">{titleAccent}</span>
      </h1>
      <p className="text-[#999] text-sm max-w-xl mx-auto">{description}</p>
      {children}
    </section>
  );
}
