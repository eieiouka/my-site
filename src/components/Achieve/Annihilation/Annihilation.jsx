import "./Annihilation.css";

const data = {
  image: "/images/achieve/annihilation.jpg",

  description: (
    <>
      元ネクサスランカー（19位）よ。
      <br />
      名前は「BrakeCat」。（今は「eieiouka」に変えてるわ）
      <br />
      昔はGappleソロラッシュもやってたけど、初期凸の方が好き。
      <br />
      好きなマップは、CoastalとCherokeeよ。
    </>
  ),
};

export default function Annihilation() {
  return (
    <div className="annihilation-card">
      <img
        src={data.image}
        alt="Annihilation実績"
        className="annihilation-image"
      />

      <p className="annihilation-description">
        {data.description}
      </p>
    </div>
  );
}