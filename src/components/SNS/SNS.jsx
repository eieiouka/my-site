import "./SNS.css";

export default function SNS() {
  return (
    <section id="sns" className="section sns">
      <p className="section-label">SNS</p>
      <h2>フォローしなさい（リンク付き）</h2>

      <div className="sns-cards">
        <a
          href="https://x.com/nanochan_665"
          target="_blank"
          rel="noopener noreferrer"
          className="sns-card"
        >
          <div className="sns-image">
            <img src="/images/twitter.jpg" alt="Twitter" />
          </div>
          <h3>Twitter ← Xとは呼ばせない</h3>
          <p>氷属性持ちのツイ廃ナノちゃん</p>
        </a>

        <a
          href="https://karotter.karon.jp/profile/nanoka"
          target="_blank"
          rel="noopener noreferrer"
          className="sns-card"
        >
          <div className="sns-image">
            <img src="/images/karotter.jpg" alt="カロッター" />
          </div>
          <h3>カロッター</h3>
          <p>時代の最先端を往くSNS</p>
        </a>

        <a
          href="https://www.youtube.com/@eieiouka_sv"
          target="_blank"
          rel="noopener noreferrer"
          className="sns-card"
        >
          <div className="sns-image">
            <img src="/images/youtube.jpg" alt="YouTube" />
          </div>
          <h3>YouTube</h3>
          <p>すごく面白いチャンネル</p>
        </a>
      </div>
    </section>
  );
}