import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src="/images/hero.jpg"
        alt="ナノちゃんポータル"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-kicker">nanochan PORTAL</p>

          <h1>ナノちゃんポータル</h1>

          <p className="hero-text">
            「計画性のないナノカちゃん」が作った、平和で健全なサイト
          </p>

          <div className="hero-buttons">
            <a href="#sns" className="hero-button primary">
              詳しく見る
            </a>

            <a href="#gallery" className="hero-button secondary">
              ギャラリーへ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}