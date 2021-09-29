import React from 'react'
import { styled } from '@mui/system'
import {HiOutlineMail} from 'react-icons/hi'
import {GiSmartphone} from 'react-icons/gi'
import {FaWhatsapp} from 'react-icons/fa'
import { Button } from '@mui/material'






const InfoStyled = styled('div')(({ theme }) => ({
    width: '100%',
    background: '#fff',
    '& > div > .iconStyle': {
        color: '#556270',
        float: 'left',
        display: 'flex',
        width: '30px',
        height: '30px',        
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease-in-out',
    },
    '& > div > .iconStyle:hover, & > .email:hover .iconStyle, & > .phone:hover .iconStyle, & > .whatsapp:hover .iconStyle': {
        color: theme.palette.primary.main,
    },
    '& > div > h4': {
        padding: '0 0 0 60px',
        fontSize: '22px',
        fontWeight: 600,
        marginBottom: '5px',
        color: '#556270',
    },
    '& > div > p': {
        padding: '0 0 0 60px',
        marginBottom: 0,
        fontSize: '14px',
        color: '#8795a4',
    },
    '& > .phone, & > .whatsapp': {
        marginTop: '40px',
    },

}))

const EmailFormStyled = styled('form')(({ theme }) => ({
    width: '100%',
    background: '#fff',
    '& > .form-group': {
        paddingBottom: '8px',
    },
    '& > div > div > input, & div > input, & > div > textarea': {
        boxShadow: 'none',
        fontSize: '14px',
        borderRadius: '4px',
    },
    '& > div > div > input:focus,  & div > input:focus, & > div > textarea:focus': {
        outline: 'none !important',
        borderColor: theme.palette.primary.main,
    },

}))









export default function Contato() {
    return (
        <div className='container'>
            
            <div className="row mt-5">

                <div className="col-lg-4">
                    <InfoStyled >
                        <div className="email">
                            <HiOutlineMail className="iconStyle" />
                            <h4>Email:</h4>
                            <p>contato@wordcode.com.br</p>
                        </div>

                        <div className="phone">
                            <GiSmartphone className="iconStyle" />
                            <h4>Telefone:</h4>
                            <p>(11) 94683-4920</p>
                        </div>

                        <div className="whatsapp">
                            <FaWhatsapp className="iconStyle" />
                            <h4>WhatsApp:</h4>
                            <p>(11) 94683-4920</p>
                        </div>

                    </InfoStyled>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0">

                    <EmailFormStyled action="" method="post" role="form" >
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control shadow-none" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control shadow-none" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control shadow-none" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="text-center"><Button variant="contained" color='primary' type="submit">Enviar</Button></div>
                    </EmailFormStyled>

                </div>

            </div>


        </div>
    )
}
