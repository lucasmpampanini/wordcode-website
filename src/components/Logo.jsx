import { styled } from '@mui/system'
import theme from '../theme';
import React from 'react'




export default function Logo({branco, cinza, fontSize}) {

    const colorLogo = cinza || !branco ?  theme.palette.secondary.main : '#fff'

    const fontSizeLogo = !fontSize ? '24px' : fontSize
    
    const LogoStyled = styled('a')(({ theme }) => ({
        margin: '0 0 20px 0',
        padding: '2px 0 2px 0',
        lineHeight: 1,
        textDecoration: 'none',
        color: colorLogo,
        '&:hover': {
            color: colorLogo,
        },
        '& > h3': {
            fontSize: fontSizeLogo,
            fontFamily: theme.typography.fontFamilyLogo,
            fontWeight: 700,

        },
    }))

    const logoStyle = {
        color: theme.palette.primary.main,
    }
    const logo = '</>'

    return (
        <LogoStyled href="/"><h3>Word <span style={logoStyle}>{logo}</span>Code</h3></LogoStyled>
    )
}