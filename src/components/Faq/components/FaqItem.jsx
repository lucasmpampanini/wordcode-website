import React from 'react'
import { styled } from '@mui/system'
import {BiHelpCircle} from 'react-icons/bi'
import theme from '../../../theme'

const FaqItemStyled = styled('div')(({ theme }) => ({
    margin: '20px 0',
    padding: '20px 0',
    borderBottom: '1px solid white',
    '& > div > .icon-style': {
        color: '#dee2e6',
        fontSize: '20px',
        float: 'left',
        lineHeight: 0,
        padding: 0,
        margin: 0,
    },
    '& > div > h4': {
        fontSize: '16px',
        lineHeight: '26px',
        fontWeight: 500,
        margin: '0 0 10px 28px',
        fontFamily: theme.typography.fontFamily[0]
    },
    '& > div > p': {
        fontSize: '15px',
    },
}))


export default function FaqItem({pergunta, resposta}) {
    return (
        <FaqItemStyled className="row d-flex align-items-stretch">
          <div className="col-lg-5">
            <BiHelpCircle className='icon-style'/>
            <h4>{pergunta}</h4>
          </div>
          <div className="col-lg-7">
            <p>
                {resposta}
            </p>
          </div>
        </FaqItemStyled>
    )
}
