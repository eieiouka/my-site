import "./PlayingCards.css";

export default function PlayingCards() {
  return (
    <section
      id="playing-cards"
      className="section game"
    >
      <p className="section-label">
        Playing Cards
      </p>

      <h2>トランプゲーム</h2>

      <div className="game-cards playing-cards-list">
        <a
          href="https://manosaba-cardgame-hub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="game-card"
        >
          <img
            src="/images/cardgame-back.jpg"
            alt="まのさばカードゲーム"
          />

          <div className="game-content">
            <h3>MANOSABA CARD GAMES</h3>

            <p>
              七並べをはじめ、まのさばキャラクターで遊べる
              トランプゲーム集です。
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}