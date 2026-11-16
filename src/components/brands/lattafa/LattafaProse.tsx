export function LattafaProse({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}