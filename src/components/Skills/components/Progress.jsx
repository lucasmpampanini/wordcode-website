import React from 'react'
import ProgressBar from './ProgressBar';
import { styled } from '@mui/system'


const ProgressStyled = styled('div')(({theme}) => ({
    height: 60,
    display: 'block',
    background: 'none',
    borderRadius: 0,
    '& > span': {
        padding: '10px 0',
        margin: 0,
        textTransform: 'uppercase',
        display: 'block',
        fontWeight: 600,
        fontFamily: theme.typography.fontFamily[0],
        color: theme.palette.secondary.main,
    }
}));

const ProgressSkillValStyled = {
    float: 'right',
    fontStyle: 'normal',
}

const ProgressBarWrapStyle = {
    background: '#edeff1',
}


export default function Progress({skill, valor}) {
    return (
    <ProgressStyled>
        <span className="skill">{skill} <div style={ProgressSkillValStyled}>{valor}</div></span>
        <div style={ProgressBarWrapStyle}>
            <ProgressBar valor={valor} />
        </div>
    </ProgressStyled>
    )
}
