import "./MiniGame.css";

export default function MiniGame() {
  return (
    <section id="minigame" className="section minigame">
      <p className="section-label">Mini Game</p>
      <h2>私が作った神ゲーの集まり</h2>

      <div className="minigame-cards">
        {/* ① 完成済み（そのまま） */}
        <a
          href="https://ema-shooting.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="minigame-card"
        >
          <img src="/images/game1.jpg" alt="ミニゲーム1" />

          <div className="minigame-content">
            <h3>桜羽エマ 処刑ゲーム</h3>
            <p>
              ランダムに飛ぶ弾を、桜羽エマに当てるゲームよ。命中すると血の色で染まるわ。
            </p>
          </div>
        </a>

        {/* ② Coming Soon */}
        <div className="minigame-card coming-soon">
          <img src="/images/game2.jpg" alt="ミニゲーム2（開発中）" />

          <div className="minigame-content">
            <h3>ナノちゃんミニゲーム2</h3>
            <p>現在開発中よ。楽しみにしてなさい。</p>
            <span className="coming-label">Coming Soon</span>
          </div>
        </div>

        {/* ③ Coming Soon */}
        <div className="minigame-card coming-soon">
          <img src="/images/game3.jpg" alt="ミニゲーム3（開発中）" />

          <div className="minigame-content">
            <h3>ナノちゃんミニゲーム3</h3>
            <p>さらに面白いゲームを準備中よ。</p>
            <span className="coming-label">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}