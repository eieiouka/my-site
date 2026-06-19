import "./MHoldem.css";

const data = {
  image: "/images/achieve/mholdem-record.jpg",

  description: (
    <>
      エムホールデム（ポーカーアプリ）もやってるわ。
      <br />
      全国ランキング10位で、公式大会（上の動画）にも出たことがあるわよ。
      <br />
      ちなみに、大会では8位だったわ。
    </>
  ),
};

export default function MHoldem() {
  return (
    <div className="mholdem-card">
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