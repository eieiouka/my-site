import "./MHoldem.css";

const data = {
  image: "/images/achieve/mholdem-record.jpg",

  description: (
    <>
      エムホールデム（ポーカーアプリ）もやってたわ。
      <br />
      全国ランキング10位で、公式大会にも出たことがあるわよ。
      <br />
      ちなみに、大会では8位だったわ。
    </>
  ),
};

export default function MHoldem() {
  return (
    <div className="mholdem-card">
      <h3 className="mholdem-title">
        エムホールデム
      </h3>

      <img
        src={data.image}
        alt="M HOLD'EM戦績"
        className="mholdem-image"
      />

      <div className="mholdem-video">
        <iframe
          src="https://www.youtube.com/embed/M1MzaElX5hQ"
          title="M HOLD'EM"
          allowFullScreen
        />
      </div>

      <p className="mholdem-description">
        {data.description}
      </p>
    </div>
  );
}