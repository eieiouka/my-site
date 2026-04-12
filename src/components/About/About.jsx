import { useState } from "react";
import "./About.css";

export default function About() {
  const [showAgeNote, setShowAgeNote] = useState(false);

  const toggleAgeNote = () => {
    setShowAgeNote((prev) => !prev);
  };

  return (
    <section id="about" className="section about">
      <p className="section-label">About</p>

      <h2>ナノちゃんのココが凄い！（ネタバレ注意）</h2>

      <p className="about-lead">
        本名は黒部ナノカ。<br />
        6月6日生まれの{" "}
        <span className="age-wrap">
          <button
            type="button"
            className="age-button"
            onClick={toggleAgeNote}
            aria-expanded={showAgeNote}
            aria-label="年齢の補足を表示"
          >
            15歳
          </button>

          {showAgeNote && (
            <span className="age-balloon">17歳じゃないわよ</span>
          )}
        </span>
        。<br />
        思慮深く、計画性を持った行動ができる天才。可愛い。ナノちゃん偉いね。
      </p>

      <div className="about-cards">
        <div className="about-card">
          <img src="/images/about1.jpg" alt="姉のリボンを探す行動力" />
          <div className="about-content">
            <h3>姉のリボンを探す行動力</h3>
            <p>
              大好きな姉のためならば、どんな手段も厭わない。犯人を捕まえるまで絶対に諦めない。
            </p>
          </div>
        </div>

        <div className="about-card">
          <img src="/images/about2.jpg" alt="正確なヘッドショット" />
          <div className="about-content">
            <h3>正確なヘッドショット</h3>
            <p>
              沢渡ココの眉間を捉え、一撃で仕留める。わざと弾を外して、恐怖心を煽る戦術も巧み。
            </p>
          </div>
        </div>

        <div className="about-card">
          <img src="/images/about3.jpg" alt="圧倒的な可愛さ" />
          <div className="about-content">
            <h3>圧倒的な可愛さ</h3>
            <p>
              見なさい、このニコニコ笑顔を。桜羽エマとは比べ物にならない可愛さよ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}