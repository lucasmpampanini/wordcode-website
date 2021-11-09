import { Box, padding } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import { Slide, Typography, Button } from '@mui/material'
import theme from '../../theme'
import Logo from '../Logo'
import { styled } from '@mui/material/styles' 

const StyledHero = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
}

const StyledCarouselInner = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    // backgroundColor: 'rgba(30, 35, 40, 0.6)', 
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    textAlign: 'center',
    '& > p': {
        margin: '0 auto 30px auto',
    }
}

const StyledCarouselInnerH2 =  styled('h2')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '28px',
        padding: '0 5px 0 5px'
    } ,
    fontFamily: theme.typography.fontFamily[1],
    marginBottom: '20px',
    fontSize: '48px',
    fontWeight: 700,
}))


const StyledCarouselInnerP =  styled('p')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: '0 5px 0 5px'
    } ,
}))

export default function Hero() {
    const [slideChange0, setSlideChange0] = useState(true)
    const [slideChange1, setSlideChange1] = useState(false)
    const [slideChange2, setSlideChange2] = useState(false)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        index === 0 ? setSlideChange0(true) : setSlideChange0(false)
        index === 1 ? setSlideChange1(true) : setSlideChange1(false)
        index === 2 ? setSlideChange2(true) : setSlideChange2(false)

    }, [index])

    return (
        <Box component='section' sx={StyledHero}>
            <Carousel as='div' activeIndex={index} onSelect={handleSelect} fade pause={false}>
                <Carousel.Item>
                    <div style={StyledCarouselInner}>
                        <Slide direction='down' in={slideChange0} timeout={1500}>
                            <StyledCarouselInnerH2>Bem-Vindo a <Logo branco fontSizeDow={30} fontSize={60}/> </StyledCarouselInnerH2>
                        </Slide>
                       
                       
                    </div>
                    <Image 
                        src="/hero/slide/slide-1.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        src="/hero/slide/slide-2.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div style={StyledCarouselInner}>
                        <Slide direction='down' in={slideChange1} timeout={1500}>
                            <StyledCarouselInnerH2>Site Institucional a partir de R$ 290</StyledCarouselInnerH2>
                        </Slide>
                        <Slide direction="down" in={slideChange1} timeout={1500}>
                            <StyledCarouselInnerP variant='p' component='p' >Sites responsivos, com botão de interação ao whatsapp e outras redes sociais.</StyledCarouselInnerP>
                        </Slide>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        src="/hero/slide/slide-3.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div style={StyledCarouselInner}>
                        <Slide direction='down' in={slideChange2} timeout={1500}>
                            <StyledCarouselInnerH2>Peça um modelo para seu negócio sem compromisso.</StyledCarouselInnerH2>
                        </Slide>
                        <Slide direction="down" in={slideChange2} timeout={1500}>
                            <StyledCarouselInnerP variant='p' component='p'>Nós escolhemos as melhores imagens em bancos de imagens mais usados.</StyledCarouselInnerP>
                        </Slide>
                        <Slide direction='up' in={slideChange2} timeout={1500}>
                            <Button style={{margin: 20, color: '#fff'}} variant="contained" href="http://wa.me/5511946834920" target="_blank">fale agora pelo whatsapp</Button>
                        </Slide>
                    </div>
                </Carousel.Item>
            </Carousel>
            
        </Box>

    )
}