import React from 'react'
import { styled } from '@mui/system'
import theme from '../../theme';
import {FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaChevronRight, FaWhatsapp} from 'react-icons/fa'



const FooterStyle = {
    background: '#4a5562',
    padding: '0 0 30px 0',
    color: '#fff',
    fontSize: '14px',
}

const FooterTopStyle = {
    background: '#515d6a',
    padding: '60px 0 30px 0',
}

const FooterInfoStyled = styled('div')(({ theme }) => ({
    marginBottom: '30px',
    '& > h3': {
        fontSize: '24px',
        margin: '0 0 20px 0',
        padding: '2px 0 2px 0',
        lineHeight: 1,
        fontWeight: 700,
    },
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


export default function Footer() {
    return (
        <footer style={FooterStyle}>
            <div style={FooterTopStyle}>
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6">
                    <FooterInfoStyled >
                        <h3>WordCode</h3>
                        <p>
                            A108 Adam Street <br/>
                            NY 535022, USA<br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/>
                        </p>
                        <SocialLinksStyle className="mt-3">
                            <a href="#" className="facebook"><FaFacebookF style={IconStyle}/></a>
                            <a href="#" className="instagram"><FaInstagram style={IconStyle}/></a>
                            <a href="#" className="skype"><FaSkype style={IconStyle}/></a>
                            <a href="#" className="linkedin"><FaLinkedinIn style={IconStyle}/></a>
                        </SocialLinksStyle>
                    </FooterInfoStyled>
                </div>

                <FooterLinksStyled className="col-lg-2 col-md-6">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Home</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">About us</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Services</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Terms of service</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Privacy policy</a></li>
                    </ul>
                </FooterLinksStyled>

                <FooterLinksStyled className="col-lg-3 col-md-6">
                    <h4>Our Services</h4>
                    <ul>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Web Design</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Web Development</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Product Management</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Marketing</a></li>
                        <li><FaChevronRight style={IconLiStyle}/> <a href="#">Graphic Design</a></li>
                    </ul>
                </FooterLinksStyled>

                <FooterLinksStyled className="col-lg-4 col-md-6">
                    <h4>Compre um modelo</h4>
                    <p>Fale conosco pelo WhatsApp</p>
                    <SocialLinksStyle className="mt-3">
                        <a href="#" ><FaWhatsapp style={{color: '#fff', fontSize: 20}}/></a>
                    </SocialLinksStyle>
                </FooterLinksStyled>

                </div>
            </div>
            </div>

            <div className="container">
                <div style={CopyrightsStyle}>
                    &copy; Copyright <strong><span>WordCode</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
