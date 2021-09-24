import Header from "../components/Header";
import Hero from "../components/Hero";
import { styled } from '@mui/system';

const indexHomeStyled =  styled('div')(({ theme }) => ({
  // fontFamily: theme.typography.fontFamily[1],
}));



export default function Home() {
  return (
    <indexHomeStyled >
      <Header />
      <Hero />
      
    </indexHomeStyled>
  )
}