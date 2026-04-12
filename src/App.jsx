import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SNS from "./components/SNS/SNS";
import About from "./components/About/About";
import Links from "./components/Links/Links"; // ←ここ変更
import Gallery from "./components/Gallery/Gallery";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SNS />
        <About />

        {/* Linkセクション */}
        <Links />

        <Gallery />
      </main>
    </>
  );
}