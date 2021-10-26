import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";
import CriacaoSites from "./criacao_sites";





export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <HomeBody />
      <Footer />
      <CriacaoSites />
    </div>
  )
}