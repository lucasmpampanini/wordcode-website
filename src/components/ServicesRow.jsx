import React from 'react'
import theme from '../theme'
import { styled } from '@mui/system'
import {FaCashRegister} from 'react-icons/fa'
import { GiFireworkRocket, GiSmartphone } from 'react-icons/gi'
import { BsGoogle, BsWhatsapp } from 'react-icons/bs'
import { IoShareSocialOutline, IoRocketOutline } from 'react-icons/io5'


const IconBoxStyled = styled('div')(({ theme }) => ({
    marginTop: '60px',
    padding: '30px',
    borderRadius: '6px',
    backgroundColor: '#f8f9fa',
    '& > h4': {
        marginLeft: '70px',
        fontWeight: 700,
        marginBottom: '15px',
        fontSize: '18px',
        textDecoration: 'none', 
        color: '#556270',
        transition: '0.3s',
    },
    '&:hover > h4': {
        color: theme.palette.primary.main,
        cursor: 'pointer'
    },
    '& > p': {
        marginLeft: '70px',
        lineHeight: '24px',
        fontSIze: '14px',
    },

}));

const StyledIcons = {
    float: 'left',
    color: theme.palette.primary.main,
    fontSize: '60px',
}


export default function ServicesRow() {
    return (
        <div>
            <div className="container">

                <div className='row'>
                    <div className="col-md-6">
                        <IconBoxStyled >
                            <GiFireworkRocket style={StyledIcons} />
                            <h4>Site Profissional</h4>
                            <p>Site Moderno, atrativo e funcional. Super otimizado e Rápido.</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <GiSmartphone style={StyledIcons} />
                            <h4>Responsivo</h4>
                            <p>Site totalmente adaptável para qualquer dispositivo e otimizado para Celular.</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <BsGoogle style={StyledIcons} />
                            <h4>Otimizado para o Google</h4>
                            <p>Site indexado ao Google para o seu negócio ser encontrado nas buscas orgânicas pelo nome.</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <BsWhatsapp style={StyledIcons} />
                            <h4>Botão WhatsApp</h4>
                            <p>Integração do seu WhatsApp no site através de um botão para facilitar a comunicação com seus clientes.</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <IoShareSocialOutline style={StyledIcons} />
                            <h4>Redes Sociais</h4>
                            <p>Integração das suas redes sociais ao site, como: Facebook, Instagram, Linkedin, Pinterest, e entre outras.</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <IoRocketOutline style={StyledIcons} />
                            <h4>Hospedagem Rápida</h4>
                            <p>O servidor de hospedagem é um fator fundamental para garantir velocidade e eficiência ao site.</p>
                        </IconBoxStyled>
                    </div>
                </div>

            </div>
        </div>
    )
}
