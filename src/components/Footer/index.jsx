import React from 'react'
import { styled } from '@mui/system'
import {FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaChevronRight, FaWhatsapp} from 'react-icons/fa'
import Logo from '../Logo'


const FooterStyle = {
    background: '#4a5562',
    padding: '0 0 30px 0',
    color: '#fff',
    fontSize: '14px',
    marginTop: 80,

}

const FooterTopStyle = {
    background: '#515d6a',
    padding: '60px 0 30px 0',

}

const FooterInfoStyled = styled('div')(({ theme }) => ({
    marginBottom: '30px',
    '& > p': {
        fontSize: '14px',
        lineHeight: '24px',
        marginBottom: 0,
        fontFamily: theme.typography.fontFamily[1],
        color: '#fff',

    },

}));

const SocialLinksStyle = styled('div')(({ theme }) => ({
    '& > a': {
        fontSize: '18px',
        display: 'inline-block',
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#fff',
        lineHeight: 1,
        padding: '8px 0',
        marginRight: '4px',
        borderRadius: '4px',
        textAlign: 'center',
        width: '36px',
        height: '36px',
        transition: '0.3s',
    },
    '& > a:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
        textDecoration: 'none',
    }
}));

const IconStyle = {
    color: '#fff'
}

const FooterLinksStyled = styled('div')(({ theme }) => ({
    marginBottom: '30px',
    '& > h4': {
        fontSize: '16px',
        fontWeight: 600,
        color: '#fff',
        position: 'relative',
        paddingBottom: '12px',
    },
    '& > ul': {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    '& > ul > li': {
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
    },
    '& > ul > li > a': {
        color: 'rgba(255, 255, 255, 0.6)',
        transition: '0.3s',
        display: 'inline-block',
        lineHeight: 1,
        textDecoration: 'none',
    },
    '& > ul > li > a:hover': {
        color: '#fff'
    },

}));

const IconLiStyle = {
    paddingRight: '5px',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '11px',
    lineHeight: 1,
}

const CopyrightsStyle = {
    textAlign: 'center',
    paddingTop: '30px',
}

const LinkInFooter = styled('a')(({ theme }) => ({
    color: '#fff',
    textDecoration: 'none',
    ':hover': {
        color: '#b9b9b9',
        textDecoration: 'none',
    }
}));

export default function Footer() {


    return (
        <footer style={FooterStyle}>
            <div style={FooterTopStyle}>
            <div 
                className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="row">

                <div className="col-lg-6 col-md-6">
                    <FooterInfoStyled >
                        <Logo branco fontSize='32px'/>
                        <p>
                            
                            <LinkInFooter 
                                href="tel:+5511946834920"
                            > 
                                <strong>Ligar:</strong> (11) 94683-4920<br/>
                            </LinkInFooter>
                            <LinkInFooter
                               href="mailto:contato@wordcode.com.br" 
                            >
                               <strong>Enviar email:</strong> contato@wordcode.com.br<br/>

                            </LinkInFooter>
                        </p>
                        <SocialLinksStyle className="mt-3">
                            <a href="https://join.skype.com/invite/sfU4cW76Jpwy" className="skype"><FaSkype style={IconStyle}/></a>
                            <a href="https://www.linkedin.com/in/lucas-pampanini-9881281a5" className="linkedin"><FaLinkedinIn style={IconStyle}/></a>
                        </SocialLinksStyle>
                    </FooterInfoStyled>
                </div>



                <FooterLinksStyled className="col-lg-6 col-md-6">
                    <h4>Entre em contato pelo WhatsApp</h4>
                    <p>É só direcionar a câmera do seu celular para o código QR ou clicar na imagem</p>
                    <a href="http://wa.me/5511946834920" target="_blank" rel="noopener noreferrer"> <img src="/qrwa.jpeg" alt="" /></a>
                </FooterLinksStyled>


                </div>
            </div>
            </div>

            <div className="container">
                <div style={CopyrightsStyle}>
                    Copyright &copy; 2021 <strong><span>WordCode</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
