import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { Fade, Tab, Tabs, Typography } from '@mui/material'

function Conteudo({children, value, index}) {
    const srcImg = `/features/features-${index}.png`
    return (
        <div
            hidden={value !== index}
            id={index}
            >
            {value === index && (
                <Fade in timeout={800}>
                    <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                            {children}
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                            <img src={srcImg} alt="" className="img-fluid"/>
                        </div>
                    </div>
              </Fade>
            )}

        </div>
    )
}




export default function Features() {
    
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const H3Style = {
        fontSize: 26, 
        fontWeight: 600, 
        marginBottom: 20, 
        color: '#556270'
    }

    const PStyle = {
        color: '#777777'
    }


    return (
        <div>

            <div className="row">
                <div className="col-lg-3">
                    <Tabs
                        orientation='vertical'
                        variant='scrollable'
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab label='Unde praesentium sed' id={0} />
                        <Tab label='Modi sit est' id={1} />
                        <Tab label='Modi sit est' id={2} />
                    </Tabs>
                </div>
                <div className="col-lg-9 mt-4 mt-lg-0">
                    <Conteudo value={value} index={0}>
                        <h3 style={H3Style}>Architecto ut aperiam autem id</h3>
                        <p style={PStyle} className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p style={PStyle} >Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </Conteudo>
                    <Conteudo value={value} index={1}>
                        <h3 style={H3Style}>Et blanditiis nemo veritatis excepturi</h3>
                        <p style={PStyle} className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p style={PStyle}>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </Conteudo>
                    <Conteudo value={value} index={2}>
                        <h3 style={H3Style}>Et blanditiis nemo veritatis excepturi</h3>
                        <p style={PStyle} className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p style={PStyle}>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </Conteudo>
                </div>
            </div>
              
    </div>
    )
}
