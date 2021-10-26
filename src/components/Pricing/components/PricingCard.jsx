import React from 'react'
import { styled } from '@mui/system'
import theme from '../../../theme'





export default function PricingCard({obj, lista, listaNa, destacar}) {


    const destacarColor = destacar ? '#fff' : '#777777' 
    const destacarBackground = destacar ? theme.palette.primary.main : '#f8f8f8' 
    
    
    
    const BoxStyled = styled('div')(({ theme })=>({
        background: '#fff',
        marginTop: 30,
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)',
        borderRadius: '5px',
        position: 'relative',
        overflow: 'hidden',
        '& > h3': {
            color: destacarColor,
            background: destacarBackground,
            fontWeight: 400,
            margin: '-20px -20px 20px -20px',
            padding: '20px 15px',
            fontSize: '16px',
            fontWeight: 600,
        },
        '& > h4': {
            fontSize: '36px',
            color: theme.palette.primary.main,
            fontWeight: 600,
            fontFamily: theme.typography.fontFamily[0],
            marginBottom: '20px',
        },
        '& > h4 > sup': {
            fontSize: '20px',
            top: '-15px',
            left: '-3px',
        },
        '& > h4 > span': {
            color: '#bababa',
            fontSize: 16,
            fontWeight: 300,
        },
        '& > ul': {
            padding: 0,
            listStyle: 'none',
            color: '#444444',
            textAlign: 'center',
            lineHeight: '20px',
            fontSize: '14px',
        },
        '& > ul > li': {
            paddingBottom: '16px',
        },
        '& > ul > .na': {
            color: '#ccc',
            textDecoration: 'line-through',
        },
        '& > .btn-wrap': {
            margin: '20px -20px -20px -20px',
            padding: '20px 15px',
            background: '#f8f8f8',
            textAlign: 'center',
        },
        '& > .btn-wrap > .btn-buy': {
            textDecoration: 'none',
            background: theme.palette.primary.main,
            display: 'inline-block',
            padding: '8px 35px 9px 35px',
            borderRadius: '4px',
            color: '#fff',
            transition: 'none',
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: theme.typography.fontFamily[1],
            fontWeight: 600,
            transition: '0.3s',
        },
        '& > .btn-wrap > .btn-buy:hover': {
            background: theme.palette.primary.second,
        },
    }))
    
    const itens = lista.map((elemnet, i) => <li key={i}>{elemnet}</li>)
    const itensNa = typeof(listaNa) === 'object' ? listaNa.map((elemnet, i) => <li className="na" key={i}>{elemnet}</li>) : []

    return (
        <div className="col-lg-3 col-md-6">
            <BoxStyled >
              <h3>{obj.titulo}</h3>
              <h4><sup>R$</sup>{obj.preco}<span> / Uni</span></h4>
              <ul>
                {itensNa}
                {itens}
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Comprar</a>
              </div>
            </BoxStyled>
        </div>
    )
}
