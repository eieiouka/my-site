import { useState } from "react";
import "./Puzzle.css";

export default function Puzzle() {
  const [openAnswers, setOpenAnswers] = useState({});

  const puzzles = [
    {
        title: "まのさば船渡りパズル",
        image: "/images/puzzle1.jpg",
        url: "https://manosaba-boat-puzzle.vercel.app/",
        description:
            "全員を無事に向こう岸へ渡すパズルゲームよ。レベル1～3があるわ。",
        answer: (
            <>
            【レベル1】
            <br />
            ① ヒロ＋ハンナ →
            <br />
            ② ヒロ ←
            <br />
            ③ シェリー＋エマ →
            <br />
            ④ シェリー＋ハンナ ←
            <br />
            ⑤ ヒロ＋ハンナ →
            <br />
            ⑥ ヒロ ←
            <br />
            ⑦ ヒロ＋ナノカ →
            <br />
            ⑧ エマ＋ハンナ ←
            <br />
            ⑨ シェリー＋エマ →
            <br />
            ⑩ ヒロ ←
            <br />
            ⑪ ヒロ＋ハンナ →（ゴール）
            <br />
            <br />
            【レベル2】
            <br />
            ① ヒロ＋ハンナ →
            <br />
            ② ヒロ ←
            <br />
            ③ シェリー＋エマ →
            <br />
            ④ エマ＋ハンナ ←
            <br />
            ⑤ ヒロ＋ハンナ →
            <br />
            ⑥ シェリー＋ハンナ ←
            <br />
            ⑦ ホノカ →
            <br />
            ⑧ ヒロ ←
            <br />
            ⑨ シェリー＋エマ →
            <br />
            ⑩ ホノカ ←
            <br />
            ⑪ ヒロ＋ハンナ →
            <br />
            ⑫ ヒロ ←
            <br />
            ⑬ ホノカ →
            <br />
            ⑭ シェリー＋ハンナ ←
            <br />
            ⑮ ヒロ＋ハンナ →
            <br />
            ⑯ エマ＋ハンナ ←
            <br />
            ⑰ シェリー＋エマ →
            <br />
            ⑱ ヒロ ←
            <br />
            ⑲ ヒロ＋ハンナ →（ゴール）
            <br />
            <br />
            【レベル3】
            <br />
            ① ナノカ＋ホノカ →
            <br />
            ② ホノカ ←
            <br />
            ③ エマ＋レイア →
            <br />
            ④ レイア＋ナノカ ←
            <br />
            ⑤ レイア＋ハンナ →
            <br />
            ⑥ エマ＋レイア ←
            <br />
            ⑦ ナノカ＋ホノカ →
            <br />
            ⑧ ホノカ ←
            <br />
            ⑨ エマ＋レイア →
            <br />
            ⑩ エマ＋ハンナ ←
            <br />
            ⑪ ホノカ →
            <br />
            ⑫ レイア＋ナノカ ←
            <br />
            ⑬ エマ＋レイア →
            <br />
            ⑭ ホノカ ←
            <br />
            ⑮ ナノカ＋ホノカ →
            <br />
            ⑯ エマ＋レイア ←
            <br />
            ⑰ レイア＋ハンナ →
            <br />
            ⑱ レイア＋ナノカ ←
            <br />
            ⑲ エマ＋レイア →
            <br />
            ⑳ ホノカ ←
            <br />
            ㉑ ナノカ＋ホノカ →（ゴール）
            <br />
            </>
        ),
    },

    {
    title: "箱入りハンナ",
    image: "/images/puzzle2.jpg",
    url: "https://binniri-hanna.vercel.app/",
    description:
        "処刑最中の遠野ハンナを脱出させるパズルよ。かなり難しいわよ。",
    answer:
        "最短116手よ。どうしても分からなければ、リセットボタンを10秒長押しすると解答マクロが再生されるわ。",
    },
  ];

  return (
    <section id="puzzle" className="section puzzle">
      <p className="section-label">Puzzle</p>
      <h2>私が作ったパズルゲームの集まり</h2>

      <div className="puzzle-cards">
        {puzzles.map((puzzle, index) => (
          <div key={index} className="puzzle-wrapper">
            <a
              href={puzzle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="puzzle-card"
            >
              <img
                src={puzzle.image}
                alt={puzzle.title}
              />

              <div className="puzzle-content">
                <h3>{puzzle.title}</h3>

                <p>
                  {puzzle.description}
                </p>
              </div>
            </a>

            <div className="puzzle-answer-box">
              <button
                type="button"
                className="answer-button"
                onClick={() =>
                  setOpenAnswers((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }))
                }
              >
                {openAnswers[index]
                  ? "答えを隠す"
                  : "答えを見る"}
              </button>

              {openAnswers[index] && (
                <div className="answer-text">
                  {puzzle.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}