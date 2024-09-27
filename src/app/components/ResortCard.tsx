interface CardProps {
  title: String;
}

export function ResortCard({ title }: CardProps) {
  return (
    <div className="p-4 w-1/5 border border-slate-300 rounded text-center">
      {title}
    </div>
  );
}
