import React from 'react'
import { styled } from '@mui/system';



const GetStartedStyle = styled('a')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '8px 25px',
    marginLeft: '30px',
    borderRadius: '4px',
    fontWeight: 400,
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.secondary.main,
        background: theme.palette.primary.second,
    },   
}));


export default function ButtonGetStartedStyle({children}) {
    return (
        <GetStartedStyle>{children}</GetStartedStyle>
    )
}
