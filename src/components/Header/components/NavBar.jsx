import React from 'react'
import { Box, styled } from '@mui/system';
import ButtonGetStartedStyle from '../../ButtonGetStartedStyle';


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
                <LiStyle><LinkNavBarStyle href="index.html">Home</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="services.html">Services</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="portfolio.html">Portfolio</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="pricing.html">Pricing</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="blog.html">Blog</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="contact.html">Contact</LinkNavBarStyle></LiStyle>
                <LiStyle><ButtonGetStartedStyle>Compre Agora</ButtonGetStartedStyle></LiStyle>
            </ul>
        </Box>
    )
}
