import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SNS from "./components/SNS/SNS";
import SubSNS from "./components/SubSNS/SubSNS";
import About from "./components/About/About";
import Links from "./components/Links/Links";
import Game from "./components/Game/Game";
import Puzzle from "./components/Puzzle/Puzzle";
import RTA from "./components/RTA/RTA";
import Achieve from "./components/Achieve/Achieve";
import Gallery from "./components/Gallery/Gallery";
import PlayingCards from "./components/PlayingCards/PlayingCards";

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

        <Game />
        <Puzzle />
        <PlayingCards />
        <RTA />
        <Achieve />
        <Gallery />
      </main>
    </>
  );
}