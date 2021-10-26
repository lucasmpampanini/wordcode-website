import React, { useState } from 'react'
import { Drawer, IconButton } from '@mui/material';
import { Box, styled } from '@mui/system';
import { AiOutlineMenu } from 'react-icons/ai'
import { Button } from '@mui/material'


const StyledDrawer = {
    paper: {
        // position: 'fixed',
        // overflow: 'hidden',
        // top: 0,
        // right: 0,
        // left: 0,
        // bottom: 0,
        // background: 'rgba(63, 73, 83, 0.9)',
        // transition: '0.3s',
        // zIndex: 999,  
    },

};

const StyledIconButton = {
    display: { 
        xs: 'block',
        sm: 'block', 
        md: 'none',
        lg: 'none' 
    },
}


const NavStyle = {
    padding: 0,
    '& > ul': {
        // display: 'block',
        // position: 'absolute',
        top: '55px',
        right: '15px',
        bottom: '15px',
        left: '15px',
        padding: '10px 0',
        backgroundColor: '#fff',
        transition: '0.3s',
        zIndex: 999,
    },
}

const LinkNavBarStyle = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '15px',
    color: '#556270',
    '&:hover': {
        color: theme.palette.primary.main,
    }
  
}));

const LiStyle = styled('li')(({ theme }) => ({
    width: 250,
    margin: 8,
   
}));

const GetStartedStyle = styled('a')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '8px 25px',
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



export default function NavBarMobile() {

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(open)
    }

    return (
        <div>
            <IconButton sx={StyledIconButton} onClick={toggleDrawer(true)}>
                <AiOutlineMenu />
            </IconButton>
            <Drawer 
                sx={StyledDrawer}
                anchor='right'
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box component='nav' sx={NavStyle}>
                    <ul>
                        <LiStyle><LinkNavBarStyle href="#servicesSection">Site Institucional</LinkNavBarStyle></LiStyle>
                        <LiStyle><LinkNavBarStyle href="#featuresSection">Vantagens</LinkNavBarStyle></LiStyle>
                        <LiStyle><LinkNavBarStyle href="#pricingSection">Preço</LinkNavBarStyle></LiStyle>
                        <LiStyle><LinkNavBarStyle href="#aboutSection">Sobre Nós</LinkNavBarStyle></LiStyle>
                        {/* <LiStyle><LinkNavBarStyle href="/portfolio">Portfolio</LinkNavBarStyle></LiStyle> */}
                        {/* <LiStyle><LinkNavBarStyle href="">Blog</LinkNavBarStyle></LiStyle> */}
                        {/* <LiStyle><LinkNavBarStyle href="/entre_em_contato">Contato</LinkNavBarStyle></LiStyle> */}
                        <LiStyle style={{marginTop: 20}}><Button style={{marginLeft: 20, color: '#fff', fontWeight: 'bold'}} variant="contained">WhatsApp</Button></LiStyle>
                    </ul>
                </Box>
                
            </Drawer>
        </div>
    )
}
