import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SNS from "./components/SNS/SNS";
import SubSNS from "./components/SubSNS/SubSNS";
import About from "./components/About/About";
import Links from "./components/Links/Links";
import Game from "./components/Game/Game";
import RTA from "./components/RTA/RTA";
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
        <SubSNS />
        <About />
        <Links />

        {/* ここに追加 */}
        <Game />
        <RTA />
        <Gallery />
        <Cards />
      </main>
    </>
  );
}