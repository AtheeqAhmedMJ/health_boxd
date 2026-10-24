import { memo } from "react";

const words = ["Care", "On call", "Reimagined", "Bengaluru"];
const row = Array.from({ length: 12 }, (_, i) => words[i % 4]);

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div>{[...row, ...row].map((w, i) => <span key={i}>{w}</span>)}</div>
    </div>
  );
}
export default memo(Marquee);
