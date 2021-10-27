import React from 'react'
import {BsCheckAll} from 'react-icons/bs'
import { styled } from '@mui/system';
import theme from '../theme'
import { Fade } from '@mui/material';
import Logo from './Logo';

const DivUlinContainerStyled =  styled('div')(({ theme }) => ({
    '& > ul': {
        listStyle: 'none',
        padding: 0,
    }
}));

const IconColor = {
    color: theme.palette.primary.main
}

const AboutRowStyledH2 = {
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '60px',
    marginBottom: '20px',
    textTransform: 'uppercase',
}

const AboutRowStyledH3 = {
    fontWeight: 500,
    lineHeight: '32px',
    fontSize: '24px',
}

export default function AboutRow() {
    return (
        <Fade in>
            <div style={{  
                padding: '60px 0', 
                overflow: 'hidden',
                }}>
                <div className="container">
                    <div className="row content">
                    <div className="col-lg-6">
                        <h2><Logo cinza fontSize='48px' /></h2>
                    </div>
                    <DivUlinContainerStyled className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <ul>
                        <li><BsCheckAll style={IconColor}/> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                        <li><BsCheckAll style={IconColor}/> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                        <li><BsCheckAll style={IconColor}/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                        </ul>
                        <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                    </DivUlinContainerStyled>
                    </div>

                </div>

            </div>

        </Fade>
    )
}
