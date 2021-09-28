import React from 'react'
import { styled } from '@mui/system'
import {FaCashRegister} from 'react-icons/fa'
import theme from '../theme'


const IconBoxStyled = styled('div')(({ theme }) => ({
    marginBottom: '20px',
    padding: '30px',
    borderRadius: '6px',
    backgroundColor: '#f8f9fa',
    '& > h4': {
        marginLeft: '70px',
        fontWeight: 700,
        marginBottom: '15px',
        fontSize: '18px',
    },
    '& > h4 > a': {
        textDecoration: 'none', 
        color: '#556270',
        transition: '0.3s',
    },
    '&:hover > h4 > a': {
        color: theme.palette.primary.main,
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
    fontSize: '40px',
}


export default function ServicesRow() {
    return (
        <div>
            <div className="container">

                <div className='row'>
                    <div className="col-md-6">
                        <IconBoxStyled >
                            <FaCashRegister style={StyledIcons} />
                            <h4><a href="#">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <FaCashRegister style={StyledIcons} />
                            <h4><a href="#">Dolor Sitema</a></h4>
                            <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <FaCashRegister style={StyledIcons} />
                            <h4><a href="#">Sed ut perspiciatis</a></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <FaCashRegister style={StyledIcons} />
                            <h4><a href="#">Nemo Enim</a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <FaCashRegister style={StyledIcons} />
                            <h4><a href="#">Magni Dolore</a></h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </IconBoxStyled>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <IconBoxStyled>
                            <FaCashRegister style={StyledIcons} />
                            <h4><a href="#">Eiusmod Tempor</a></h4>
                            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </IconBoxStyled>
                    </div>
                </div>

            </div>
        </div>
    )
}
