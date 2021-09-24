import Header from "../components/Header";
import Hero from "../components/Hero";
import { styled } from '@mui/system';
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

const indexHomeStyled =  styled('div')(({ theme }) => ({
  // fontFamily: theme.typography.fontFamily[1],
}));



export default function Home() {
  return (
    <indexHomeStyled >
      <Header />
      <Hero />
      <HomeBody />
      <Footer />
    </indexHomeStyled>
  )
}