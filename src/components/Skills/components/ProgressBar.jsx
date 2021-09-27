import React from 'react'





export default function ProgressBar({valor}) {

    const ProgressBarStyle = {
        width: valor,
        height: 10,
        transition: '0.9s',
        backgroundColor: '#6b7b8d',
    }


    return (
        <div style={ProgressBarStyle}>
            
        </div>
    )
}
