import MahjongSoul from "./MahjongSoul/MahjongSoul";
import MHoldem from "./MHoldem/MHoldem";
import "./Achieve.css";

export default function Achieve() {
  return (
    <section id="achieve" className="section achieve">
      <p className="section-label">Achieve</p>

      <h2>私の実績集</h2>

      <div className="achieve-wrapper">
        <MahjongSoul />
        <MHoldem />
      </div>
    </section>
  );
}