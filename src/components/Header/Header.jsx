import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">ナノちゃんポータル</div>

          <nav className="nav">
            <a href="#sns">SNS</a>
            <a href="#about">About</a>
            <a href="#link">Link</a>
            <a href="#game">Game</a> {/* ←追加 */}
            <a href="#gallery">Gallery</a>
          </nav>
      </div>
    </header>
  );
}