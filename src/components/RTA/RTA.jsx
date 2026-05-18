import "./RTA.css";

export default function RTA() {
  return (
    <section id="rta" className="section rta">
      <p className="section-label">RTA</p>
      <h2>まのさばRTA（5位）</h2>

      <div className="rta-grid">
        <a
          href="https://x.com/ema_no_waruguti/status/2055588326560997706"
          target="_blank"
          rel="noopener noreferrer"
          className="rta-card"
        >
          <img
            src="/images/rta-thumbnail.jpg"
            alt="まのさばRTA動画サムネイル"
          />

          <div className="rta-content">
            <h3>まのさばRTA 記録動画</h3>
            <p>
              現在、RTA 5位（1:13:06.45）よ。<br />
              これからも記録更新を目指すわ。
            </p>
          </div>
        </a>

        <a
          href="https://www.speedrun.com/ja-JP/Magical_Girl_Witch_Trials"
          target="_blank"
          rel="noopener noreferrer"
          className="rta-card"
        >
          <img src="/images/rta-speedrun.jpg" alt="speedrun.com" />

          <div className="rta-content">
            <h3>speedrun.com（まのさば）</h3>
            <p>
              まのさばRTAのランキングページはこちら。<br />
              no_plan_nanokaが私よ。
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}