import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* SNS */}
        <section className="section sns">
          <p className="section-label">SNS</p>
          <h2>リンク</h2>

          <div className="sns-cards">
            <a
              href="https://x.com/ema_ha_aku"
              target="_blank"
              rel="noopener noreferrer"
              className="sns-card"
            >
              <h3>Twitter</h3>
              <p>最新の投稿やイラストはこちら</p>
            </a>

            <a
              href="https://karotter.karon.jp/profile/nanoka"
              target="_blank"
              rel="noopener noreferrer"
              className="sns-card"
            >
              <h3>カロッター</h3>
              <p>活動記録やつぶやき</p>
            </a>

            <a
              href="https://www.youtube.com/@eieiouka_sv"
              target="_blank"
              rel="noopener noreferrer"
              className="sns-card"
            >
              <h3>YouTube</h3>
              <p>動画コンテンツを見る</p>
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <p className="section-label">About</p>

          <h2>ナノちゃんポータルについて</h2>

          <p className="about-lead">
            このサイトは、「計画性のないナノカちゃん」を中心に、
            イラストや情報をまとめたファンサイトです。
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Character</h3>
              <p>ナノカちゃんの魅力や雰囲気を紹介します。</p>
            </div>

            <div className="about-card">
              <h3>Gallery</h3>
              <p>イラストやビジュアルを掲載します。</p>
            </div>

            <div className="about-card">
              <h3>Portal</h3>
              <p>情報をまとめた入口のようなサイトです。</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section">
          <p className="section-label">Gallery</p>
          <h2>ギャラリー</h2>
          <p>ここに画像を並べる</p>
        </section>
      </main>
    </>
  );
}