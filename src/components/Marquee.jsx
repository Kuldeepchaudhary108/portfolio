export default function Marquee({ text }) {
  return (
    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20">
      <div className="marquee-container font-mono text-2xl font-bold text-white">
        <div className="marquee-content">
          <span className="pr-8">{text}</span>
          <span className="pr-8" aria-hidden="true">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
