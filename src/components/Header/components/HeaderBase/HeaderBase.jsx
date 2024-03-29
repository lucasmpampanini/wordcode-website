import React from 'react'
import { styled } from '@mui/system';
import style from './style.module.css'
import Logo from '../../../Logo';

const HeaderStyle = styled('header')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    background: '#fff',
    transition: 'all 0.5s',
    zIndex: 997,
    padding: '20px 0',
  
  }));

const LogoStyle = styled('div')(({ theme }) => ({
    margin: 0,
    padding: 0,
    lineHeight: 1,
    textDecoration: 'none',
    '& > img': {
        maxHeight: '40px',
    }

}));


export default function HeaderBase(props) {
    return (
        <HeaderStyle className="fixed-top d-flex align-items-center" id={ props.scrolledShow ? style.headerScrolled : ''}>
            <div className="container d-flex align-items-center">
               
                <LogoStyle href="/" className="logo me-auto"><Logo /></LogoStyle>
                
                {props.children}

            </div>
        </HeaderStyle>
    )
}
