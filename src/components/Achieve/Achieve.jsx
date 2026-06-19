import MahjongSoul from "./MahjongSoul/MahjongSoul";
import "./Achieve.css";

export default function Achieve() {
  return (
    <section id="achieve" className="section achieve">
      <p className="section-label">Achieve</p>

      <h2>私の実績集</h2>

      <div className="achieve-wrapper">
        <MahjongSoul />
      </div>
    </section>
  );
}