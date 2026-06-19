import "./MahjongSoul.css";

const stats = {
  rankImage: "/images/achieve/mahjong-soul-rank.jpg",

  firstCount: 276,
  secondCount: 264,
  thirdCount: 232,
  fourthCount: 185,

  description: (
    <>
      雀魂は現在、雀聖2です。
      <br />
      東風戦しか打っていません。
      <br />
      一応、聖3坂でもポイント期待値はプラスのようです。（牌譜屋調べ）
    </>
  ),
};

export default function MahjongSoul() {
  const totalGames =
    stats.firstCount +
    stats.secondCount +
    stats.thirdCount +
    stats.fourthCount;

  const averageRank =
    totalGames === 0
      ? 0
      : (
          stats.firstCount * 1 +
          stats.secondCount * 2 +
          stats.thirdCount * 3 +
          stats.fourthCount * 4
        ) / totalGames;

  const rates = [
    {
      label: "1位率",
      count: stats.firstCount,
      value:
        totalGames === 0
          ? 0
          : (stats.firstCount / totalGames) * 100,
    },
    {
      label: "2位率",
      count: stats.secondCount,
      value:
        totalGames === 0
          ? 0
          : (stats.secondCount / totalGames) * 100,
    },
    {
      label: "3位率",
      count: stats.thirdCount,
      value:
        totalGames === 0
          ? 0
          : (stats.thirdCount / totalGames) * 100,
    },
    {
      label: "4位率",
      count: stats.fourthCount,
      value:
        totalGames === 0
          ? 0
          : (stats.fourthCount / totalGames) * 100,
    },
  ];

  return (
    <div className="mahjong-soul-card">
      <h3 className="mahjong-title">
        雀魂
      </h3>

      <img
        src={stats.rankImage}
        alt="雀魂段位"
        className="mahjong-rank-image"
      />

      <div className="mahjong-chart">
        {rates.map((rate) => (
          <div
            key={rate.label}
            className="mahjong-row"
          >
            <span>
              {rate.label}
            </span>

            <div className="mahjong-bar-bg">
              <div
                className="mahjong-bar"
                style={{
                  width: `${rate.value}%`,
                }}
              />
            </div>

            <span>
              {rate.value.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      <div className="mahjong-average">
        総対局数：{totalGames}戦（玉の間 東風戦のみ）
        <br />
        平均着順：
        {averageRank.toFixed(2)}位
      </div>

      <p className="mahjong-description">
        {stats.description}
      </p>
    </div>
  );
}