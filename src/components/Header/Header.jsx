import { useRef } from "react";
import "./Header.css";

export default function Header() {
  const navRef = useRef(null);

  // ▼ スクロール制御（ピタ止め）
  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    const header = document.querySelector(".topbar");

    if (!target || !header) return;

    const headerHeight = header.offsetHeight;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  // ▼ ドラッグスクロール
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - navRef.current.offsetLeft;
    scrollLeft = navRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDown = false);
  const handleMouseUp = () => (isDown = false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    navRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <header className="topbar">
      <div className="logo-area">
        <div className="logo-main">ナノちゃんポータル</div>
        <div className="logo-sub">
          made by 計画性のないナノカちゃん
        </div>
      </div>

      <nav
        className="nav"
        ref={navRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#sns");
          }}
        >
          SNS
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#subsns");
          }}
          className="nav-subsns"
        >
          SubSNS
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#about");
          }}
        >
          About
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#links");
          }}
        >
          Links
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#game");
          }}
        >
          Game
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#puzzle");
          }}
        >
          Puzzle
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#cards");
          }}
        >
          Cards
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#playing-cards");
          }}
        >
          Playing Cards
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#rta");
          }}
        >
          RTA
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#achieve");
          }}
        >
          Achieve
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#gallery");
          }}
        >
          Gallery
        </a>
      </nav>
    </header>
  );
}