import "./Links.css";

export default function Links() {
  return (
    <section id="link" className="section links">
      <p className="section-label">Link</p>
      <h2>私が作った別ページ</h2>

      <div className="links-cards">
        <a
          href="https://manosaba-hikousiki.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="links-card"
        >
          <img src="/images/link1.jpg" alt="まのさば非公式ホームページ" />

          <div className="links-content">
            <h3>まのさば非公式ホームページ</h3>
            <p>キャラクター紹介などを載せているわ。<br/>
            Wikipediaみたいな存在よ。</p>
          </div>
        </a>

        <a
          href="https://ema-mezamashi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="links-card"
        >
          <img src="/images/mezamashi.jpg" alt="ema-mezamashi" />

          <div className="links-content">
            <h3>エマちゃん目覚まし</h3>
            <p>桜羽エマの悲鳴で起きる、目覚まし時計アプリ。<br/>
            ビックリするほど起きられるから、朝に弱い人にオススメよ。</p>
          </div>
        </a>
      </div>
    </section>
  );
}