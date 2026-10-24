import { memo } from "react";

const capsules = [
  [8, 10, 90, 14, -20], [78, 6, 60, 18, 15], [88, 44, 120, 22, -35], [4, 52, 70, 20, 30],
  [40, 78, 100, 17, 10], [70, 86, 64, 24, -10], [24, 30, 48, 26, 50],
];

/** Fixed, pointer-less layer: soft aurora blobs plus drifting glass capsules. */
function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
      {capsules.map(([x, y, w, d, r], i) => (
        <i key={i} style={{ "--x": `${x}%`, "--y": `${y}%`, "--w": `${w}px`, "--d": `${d}s`, "--r": `${r}deg` }} />
      ))}
    </div>
  );
}
export default memo(Backdrop);
