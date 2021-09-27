import React from 'react'
import { styled } from '@mui/system'


const BreadcrumbsStyled = styled('div')(({ theme }) => ({
    padding: '18px 0',
    background: '#f8f9fa',
    minHeight: '40px',
    marginTop: '80px',
    textDecoration: 'none',
    '& div > div > h2': {
        fontSize: '32px',
        fontWeight: 300,
        margin: 0,
    },
    '& div > div > ol': {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: '14px',
    },
    '& div > div > ol > li > a': {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
    '& div > div  > ol > li + li': {
    paddingLeft: '10px',
    },
    '& div > div  > ol > li + li:before': {
    display: 'inline-block',
    paddingRight: '10px',
    color: '#6b7b8d',
    content: `'/'`,
    }
}));





export default function Breadcrumbs({nomeDaPagina}) {
    return (
        <BreadcrumbsStyled>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>{nomeDaPagina}</h2>
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>{nomeDaPagina}</li>
                    </ol>
                </div>

            </div>
        </BreadcrumbsStyled>
    )
}
