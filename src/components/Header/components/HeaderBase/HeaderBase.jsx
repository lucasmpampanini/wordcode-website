import React from 'react'
import { styled } from '@mui/system';
import style from './style.module.css'
import Image from 'next/image'

const HeaderStyle = styled('header')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    background: '#f0f0f0',
    transition: 'all 0.5s',
    zIndex: 997,
    padding: '20px 0',
  
  }));

const LogoStyle = styled('a')(({ theme }) => ({
    margin: 0,
    padding: 0,
    lineHeight: 1,
    '& > img': {
        maxHeight: '40px',
    }

}));


export default function HeaderBase(props) {
    return (
        <HeaderStyle className="fixed-top d-flex align-items-center" id={ props.scrolledShow ? style.headerScrolled : ''}>
            <div className="container d-flex align-items-center">
               
                <LogoStyle href="index.html" className="logo me-auto"><img src="/wordCode-b.png" className="img-fluid" /></LogoStyle>
                
                {props.children}

            </div>
        </HeaderStyle>
    )
}
