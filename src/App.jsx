import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SNS from "./components/SNS/SNS";
import About from "./components/About/About";
import Links from "./components/Links/Links";
import Game from "./components/Game/Game"; // ←追加
import Gallery from "./components/Gallery/Gallery";
import Cards from "./components/Cards/Cards";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SNS />
        <About />
        <Links />

        {/* ここに追加 */}
        <Game />

        <Gallery />
        <Cards />
      </main>
    </>
  );
}