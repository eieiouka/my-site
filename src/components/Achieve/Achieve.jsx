import { useState } from "react";
import MahjongSoul from "./MahjongSoul/MahjongSoul";
import MHoldem from "./MHoldem/MHoldem";
import PokerChase from "./PokerChase/PokerChase";
import ShogiWars from "./ShogiWars/ShogiWars";
import "./Achieve.css";
import Annihilation from "./Annihilation/Annihilation";

export default function Achieve() {
  const [openItems, setOpenItems] = useState({
    mahjongSoul: false,
    mHoldem: false,
    pokerChase: false,
    shogiWars: false,
    annihilation: false,
  });

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="achieve" className="section achieve">
      <p className="section-label">Achieve</p>

      <h2>ゲームの実績集</h2>

      <div className="achieve-wrapper">
        <button
          type="button"
          className="achieve-toggle"
          onClick={() => toggleItem("mahjongSoul")}
        >
          雀魂
          <span>{openItems.mahjongSoul ? "−" : "+"}</span>
        </button>
        {openItems.mahjongSoul && <MahjongSoul />}

        <button
          type="button"
          className="achieve-toggle"
          onClick={() => toggleItem("mHoldem")}
        >
          エムホールデム
          <span>{openItems.mHoldem ? "−" : "+"}</span>
        </button>
        {openItems.mHoldem && <MHoldem />}

        <button
          type="button"
          className="achieve-toggle"
          onClick={() => toggleItem("pokerChase")}
        >
          ポーカーチェイス
          <span>{openItems.pokerChase ? "−" : "+"}</span>
        </button>
        {openItems.pokerChase && <PokerChase />}

        <button
          type="button"
          className="achieve-toggle"
          onClick={() => toggleItem("shogiWars")}
        >
          将棋ウォーズ
          <span>{openItems.shogiWars ? "−" : "+"}</span>
        </button>
        {openItems.shogiWars && <ShogiWars />}

        <button
            type="button"
            className="achieve-toggle"
            onClick={() => toggleItem("annihilation")}
        >
            Annihilation（マイクラ）
            <span>{openItems.annihilation ? "−" : "+"}</span>
        </button>

        {openItems.annihilation && <Annihilation />}
      </div>
    </section>
  );
}