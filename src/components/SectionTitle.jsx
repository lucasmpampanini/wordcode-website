import React from 'react'
import { styled } from '@mui/system'


const SectionTitleStyled =  styled('div')(({ theme }) => ({
    paddingBottom: 40,
    '& > h2': {
        fontSize: '14px',
        fontWeight: 500,
        padding: 0,
        lineHeight: '1px',
        margin: '0 0 5px 0',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#aaaaaa',
        fontFamily: theme.typography.fontFamily[0],
    },
    '& > h2:after': {
        content: `''`,
        width: '120px',
        height: '1px',
        display: 'inline-block',
        background: theme.palette.primary.main,
        margin: '4px 10px',
    },
    '& > p': {
        margin: 0,
        margin: 0,
        fontSize: 36,
        fontWeight: 700,
        textTransform: 'uppercase',
        fontFamily: theme.typography.fontFamily[0],
        color: theme.palette.secondary.main,
    }
}));


export default function SectionTitle({title, paragraph}) {
    return (
        <SectionTitleStyled>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </SectionTitleStyled>
    )
}
