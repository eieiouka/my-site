import "./ShogiWars.css";

const data = {
  image: "/images/achieve/shogi-wars.jpg",

  description: (
    <>
      将棋ウォーズは二段よ。
      <br />
      中の人は九間飛車が好き。
      <br />
      最近はあまりやってないわね。
    </>
  ),
};

export default function ShogiWars() {
  return (
    <div className="shogi-wars-card">
      <img
        src={data.image}
        alt="将棋ウォーズ戦績"
        className="shogi-wars-image"
      />

      <p className="shogi-wars-description">
        {data.description}
      </p>
    </div>
  );
}