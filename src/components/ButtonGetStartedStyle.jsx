import React from 'react'
import { styled } from '@mui/system';



const GetStartedStyle = styled('a')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '8px 25px',
    marginLeft: '30px',
    borderRadius: '4px',
    fontFamily: theme.typography.fontFamily[1],
    fontSize: '16px',
    fontWeight: 400,
    fontWeight: 600,
    color: '#fff',
    textDecoration: 'none',
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
        color: '#fff',
        background: theme.palette.primary.second,
    },   
}));


export default function ButtonGetStartedStyle({children}) {
    return (
        <GetStartedStyle>{children}</GetStartedStyle>
    )
}
