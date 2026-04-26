import { useState } from "react";
import "./Cards.css";

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export default function Cards() {
  const [activeRank, setActiveRank] = useState("A");

  const cards = [1, 2, 3, 4].map((num) => ({
    id: `${activeRank}${num}`,
    src: `/images/cards/card_${activeRank}${num}.png`,
    alt: `まのさばトランプ ${activeRank}-${num}`,
  }));

  return (
    <section id="cards" className="cards-section">
      <div className="section-title-wrap">
        <p className="section-mini">CARDS</p>
        <h2 className="section-title">まのさばトランプ</h2>
      </div>

      <div className="cards-tabs">
        {ranks.map((rank) => (
          <button
            key={rank}
            type="button"
            className={`cards-tab ${activeRank === rank ? "active" : ""}`}
            onClick={() => setActiveRank(rank)}
          >
            {rank}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card-item" key={card.id}>
            <img src={card.src} alt={card.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}