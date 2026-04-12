import "./Game.css";

export default function Game() {
  return (
    <section id="game" className="section game">
      <p className="section-label">Game</p>
      <h2>私が作った神ゲーの集まり</h2>

      <div className="game-cards">
        <a
          href="https://ema-shooting.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="game-card"
        >
          <img src="/images/game1.jpg" alt="桜羽エマ 処刑ゲーム" />

          <div className="game-content">
            <h3>桜羽エマ 処刑ゲーム</h3>
            <p>
              ランダムに飛ぶ弾を、桜羽エマに当てるゲームよ。命中すると血の色で染まるわ。
            </p>
          </div>
        </a>

        <div className="game-card coming-soon">
          <img src="/images/game2.jpg" alt="ナノちゃんミニゲーム2（開発中）" />

          <div className="game-content">
            <h3>ナノちゃんミニゲーム2</h3>
            <p>現在開発中よ。楽しみにしてなさい。</p>
            <span className="coming-label">Coming Soon</span>
          </div>
        </div>

        <div className="game-card coming-soon">
          <img src="/images/game3.jpg" alt="ナノちゃんミニゲーム3（開発中）" />

          <div className="game-content">
            <h3>ナノちゃんミニゲーム3</h3>
            <p>さらに面白いゲームを準備中よ。</p>
            <span className="coming-label">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}