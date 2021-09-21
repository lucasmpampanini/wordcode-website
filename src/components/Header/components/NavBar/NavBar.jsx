import React from 'react'
import { styled } from '@mui/system';


const NavStyle = styled('nav')(({ theme }) => ({
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
  
}));

const LinkNavBarStyle = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0 10px 30px',
    fontFamily: theme.typography.fontFamily,
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

const GetStartedStyle = styled('a')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '8px 25px',
    marginLeft: '30px',
    borderRadius: '4px',
    fontWeight: 400,
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    transition: '0.3s',
    '&:hover': {
        color: theme.palette.secondary.main,
        background: theme.palette.primary.second,
    },   
}));


export default function NavBar() {
    return (
        <NavStyle>
            <ul>
                <LiStyle><LinkNavBarStyle href="index.html">Home</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="services.html">Services</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="portfolio.html">Portfolio</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="pricing.html">Pricing</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="blog.html">Blog</LinkNavBarStyle></LiStyle>
                <LiStyle><LinkNavBarStyle href="contact.html">Contact</LinkNavBarStyle></LiStyle>
                <LiStyle><GetStartedStyle href="index.html">Get Started</GetStartedStyle></LiStyle>
            </ul>
        </NavStyle>
    )
}
