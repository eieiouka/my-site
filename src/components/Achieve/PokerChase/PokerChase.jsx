import { useState } from "react";
import "./PokerChase.css";

const pokerChaseData = {
  mainImage: "/images/achieve/poker-chase-main.jpg",
  nanokaImage: "/images/achieve/poker-chase-nanoka.jpg",

  stages: {
    1: {
      promoted: true,

      counts: {
        first: 2,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        sixth: 0,
      },
    },

    2: {
      promoted: true,

      counts: {
        first: 2,
        second: 6,
        third: 5,
        fourth: 1,
        fifth: 1,
        sixth: 0,
      },
    },

    3: {
      promoted: true,

      counts: {
        first: 5,
        second: 11,
        third: 4,
        fourth: 11,
        fifth: 2,
        sixth: 0,
      },
    },

    4: {
      promoted: true,

      counts: {
        first: 4,
        second: 4,
        third: 8,
        fourth: 1,
        fifth: 0,
        sixth: 0,
      },
    },

    5: {
      promoted: true,

      counts: {
        first: 5,
        second: 11,
        third: 7,
        fourth: 8,
        fifth: 1,
        sixth: 0,
      },
    },

    6: {
      promoted: true,

      counts: {
        first: 8,
        second: 5,
        third: 7,
        fourth: 5,
        fifth: 1,
        sixth: 2,
      },
    },

    7: {
      promoted: false,

      counts: {
        first: 14,
        second: 11,
        third: 4,
        fourth: 8,
        fifth: 8,
        sixth: 5,
      },
    },
  },
};

const stageLabels = {
  1: "ビギナー",
  2: "ブロンズ",
  3: "シルバー",
  4: "ゴールド",
  5: "プラチナ",
  6: "ダイヤモンド",
  7: "レジェンド",
};

const rankLabels = [
  ["first", "1位"],
  ["second", "2位"],
  ["third", "3位"],
  ["fourth", "4位"],
  ["fifth", "5位"],
  ["sixth", "6位"],
];

export default function PokerChase() {
  const [activeStage, setActiveStage] = useState(1);

  const stageData = pokerChaseData.stages[activeStage];
  const counts = stageData?.counts ?? null;

  const totalGames = counts
    ? Object.values(counts).reduce(
        (sum, count) => sum + Number(count ?? 0),
        0
      )
    : 0;

  const averageRank =
    counts && totalGames > 0
      ? (
          Number(counts.first ?? 0) * 1 +
          Number(counts.second ?? 0) * 2 +
          Number(counts.third ?? 0) * 3 +
          Number(counts.fourth ?? 0) * 4 +
          Number(counts.fifth ?? 0) * 5 +
          Number(counts.sixth ?? 0) * 6
        ) / totalGames
      : null;

  const pointExpectation =
    activeStage === 7 && counts && totalGames > 0
      ? (
          Number(counts.first ?? 0) * 40 +
          Number(counts.second ?? 0) * 15 +
          Number(counts.third ?? 0) * 3 +
          Number(counts.fourth ?? 0) * 0 +
          Number(counts.fifth ?? 0) * -18 +
          Number(counts.sixth ?? 0) * -40
        ) / totalGames
      : null;

  const rates = rankLabels.map(([key, label]) => {
    const count = counts ? Number(counts[key] ?? 0) : null;

    return {
      key,
      label,
      count,
      value:
        count !== null && totalGames > 0
          ? (count / totalGames) * 100
          : null,
    };
  });

  return (
    <div className="poker-chase-card">
      <div className="poker-account-label">
        本垢（ダイヤ帯よ。当時は、レジェンド帯が誕生する前だったわ。）
      </div>

      <div className="poker-chase-images">
        <img
          src={pokerChaseData.mainImage}
          alt="ポーカーチェイス 本垢戦績"
        />
      </div>

      <div className="poker-account-label">
        計画性のないナノカちゃん（新たに作ったアカウントよ。戦績データは下に載せてるわ。）
      </div>

      <div className="poker-chase-images">
        <img
          src={pokerChaseData.nanokaImage}
          alt="ポーカーチェイス 計画性のないナノカちゃん戦績"
        />
      </div>

      <div className="poker-stage-tabs">
        {[1, 2, 3, 4, 5, 6, 7].map((stage) => (
          <button
            key={stage}
            type="button"
            className={activeStage === stage ? "active" : ""}
            onClick={() => setActiveStage(stage)}
          >
            {stageLabels[stage]}
          </button>
        ))}
      </div>

      <div className="poker-stage-panel">
        <h4>
          {stageLabels[activeStage]}
          {stageData.promoted ? "（昇格済み）" : ""}
        </h4>

        {counts ? (
          <>
            <div className="poker-rank-chart">
              {rates.map((rate) => (
                <div key={rate.key} className="poker-rank-row">
                  <span>{rate.label}</span>

                  <div className="poker-rank-bar-bg">
                    <div
                      className="poker-rank-bar"
                      style={{
                        width: `${rate.value ?? 0}%`,
                      }}
                    />
                  </div>

                  <span>
                    {rate.value === null
                      ? "未入力"
                      : `${rate.value.toFixed(1)}%`}
                  </span>
                </div>
              ))}
            </div>

            <div className="poker-summary">
              <p>プレイ回数：{totalGames}回</p>

              <p>
                平均着順：
                {averageRank === null
                  ? "未入力"
                  : `${averageRank.toFixed(2)}位`}
              </p>

              {activeStage === 7 && pointExpectation !== null && (
                <p>
                  ポイント期待値：
                  {pointExpectation >= 0 ? "+" : ""}
                  {pointExpectation.toFixed(2)}
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="poker-empty">
            このステージの戦績はまだ未入力です。
          </p>
        )}
      </div>
    </div>
  );
}