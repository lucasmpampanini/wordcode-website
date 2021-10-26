import React from 'react'
import { Box, styled } from '@mui/system';
import { Button } from '@mui/material'


const NavStyle = {
    padding: 0,
    '& > ul': {
        margin: 0,
        padding: 0,
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
    },
    '& > li': {
        position: 'relative',
    },
    display: { 
        xs: 'none',
        sm: 'none', 
        md: 'block',
        lg: 'block' 
    }
 
  
}

const LinkNavBarStyle = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0 10px 30px',
    fontFamily: theme.typography.fontFamily[0],
    fontSize: '15px',
    fontWeight: 500,
    color: theme.palette.secondary.main, 
    whiteSpace: 'nowrap',
    transition: '0.3s',
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.primary.main,
    }
  
}));

const LiStyle = styled('li')(({ theme }) => ({
    position: 'relative',
   
}));




export default function NavBar() {
    return (
        <Box component='nav' sx={NavStyle}>
            <ul>
                <LiStyle><LinkNavBarStyle href="#servicesSection">Site Institucional</LinkNavBarStyle></LiStyle>
                {/* <LiStyle><LinkNavBarStyle href="/sobre_nos">Sobre Nós</LinkNavBarStyle></LiStyle> */}
                {/* <LiStyle><LinkNavBarStyle href="/servicos">Serviços</LinkNavBarStyle></LiStyle> */}
                {/* <LiStyle><LinkNavBarStyle href="/portfolio">Portfolio</LinkNavBarStyle></LiStyle> */}
                <LiStyle><LinkNavBarStyle href="#pricingSection">Preço</LinkNavBarStyle></LiStyle>
                {/* <LiStyle><LinkNavBarStyle href="">Blog</LinkNavBarStyle></LiStyle> */}
                {/* <LiStyle><LinkNavBarStyle href="/entre_em_contato">Contato</LinkNavBarStyle></LiStyle> */}
                <LiStyle><Button style={{marginLeft: 20, color: '#fff', fontWeight: 'bold'}} variant="contained">WhatsApp</Button></LiStyle>
            </ul>
        </Box>
    )
}
