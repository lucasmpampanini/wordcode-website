import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import { Slide, Typography, Button } from '@mui/material'
import theme from '../../theme'


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
    backgroundColor: 'rgba(30, 35, 40, 0.6)', 
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

const StyledCarouselInnerH2 = {
    fontFamily: theme.typography.fontFamily[1],
    marginBottom: '20px',
    fontSize: '48px',
    fontWeight: 700,
}


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
                    <Image 
                        src="/hero/slide/slide-1.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div style={StyledCarouselInner}>
                        <Slide direction='down' in={slideChange0} timeout={1500}>
                            <Typography variant='h2' component='h2' sx={StyledCarouselInnerH2}>Bem-Vindo a WordCode</Typography>
                        </Slide>
                        <Slide direction='up' in={slideChange0} timeout={1500}>
                            <Button variant="contained">Saiba mais</Button>
                        </Slide>
                       
                    </div>
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
                            <Typography variant='h2' component='h2' sx={StyledCarouselInnerH2}>WordCode</Typography>
                        </Slide>
                        <Slide direction="down" in={slideChange1} timeout={1500}>
                            <Typography variant='p' component='p' >First slide label</Typography>
                        </Slide>
                        <Slide direction='up' in={slideChange1} timeout={1500}>
                            <Button variant="contained">Saiba mais</Button>
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
                            <Typography variant='h2' component='h2' sx={StyledCarouselInnerH2}>First slide label</Typography>
                        </Slide>
                        <Slide direction="down" in={slideChange2} timeout={1500}>
                            <Typography variant='p' component='p'>First slide label</Typography>
                        </Slide>
                        <Slide direction='up' in={slideChange2} timeout={1500}>
                            <Button variant="contained">Saiba mais</Button>
                        </Slide>
                    </div>
                </Carousel.Item>
            </Carousel>
            
        </Box>

    )
}




// <Box component='div' sx={StyledCarousel} id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
//                 <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
//                 <Box component='div' sx={StyledCarousel} className="carousel-inner">
//                     <Box component='div' sx={StyledCarouselItem} className="carousel-item" style={{background: `url(${'/hero/slide/slide-1.jpg'})`}}>
//                         <div className="carousel-container">
                           
//                         </div>
//                     </Box>

//                     <Box component='div' sx={StyledCarouselItem} className="carousel-item" style={{background: `url(${'/hero/slide/slide-2.jpg'})`}}>
//                         <div className="carousel-container">
                            
//                         </div>
//                     </Box>

//                     <Box component='div' sx={StyledCarouselItem} className="carousel-item" style={{background: `url(${'/hero/slide/slide-3.jpg'})`}}>
//                         <div className="carousel-container">
                            
//                         </div>
//                     </Box>
//                 </Box>
//                 <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
//                 </a>

//                 <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
//                     <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
//                 </a>
//             </Box>