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
          </div>
        </a>
      </div>
    </section>
  );
}