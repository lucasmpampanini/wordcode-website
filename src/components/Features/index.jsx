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
                        <Tab label='SER ENCONTRADO NO GOOGLE' id={0} />
                        <Tab label='BAIXO INVESTIMENTO' id={1} />
                        <Tab label='Transmite confiança e credibilidade' id={2} />
                    </Tabs>
                </div>
                <div className="col-lg-9 mt-4 mt-lg-0">
                    <Conteudo value={value} index={0}>
                        <h3 style={H3Style}>SER ENCONTRADO NO GOOGLE</h3>
                        <p style={PStyle} className="fst-italic">O google é um meio de busca que a maioria das pessoas buscam quando querem saber informações sobre um produto ou serviço.</p>
                        <p style={PStyle} >MAIS VISIBILIDADE: Mesmo para empresas pequenas ou negócios locais, um site trará mais visibilidade, já que o alcance geográfico dele é bem maior. <br /> MAIS PROFISSIONAL: Um site transmite uma imagem muito mais profissional, o que é uma excelente maneira de gerar mais confiança e credibilidade para sua empresa.</p>
                    </Conteudo>
                    <Conteudo value={value} index={1}>
                        <h3 style={H3Style}>BAIXO INVESTIMENTO</h3>
                        <p style={PStyle} className="fst-italic">Criar um site para o seu negócio não é custo, e sim investimento, pois tem excelente relação custo x benefício, se comparado com qualquer outra mídia convencional.</p>
                        <p style={PStyle}>MAIS CLIENTES, MAIS VENDAS: Levando em consideração que um site traz mais visibilidade, autoridade, profissionalismo e tem um alcance enorme, ele se torna uma ótima vitrine virtual. É possível expor e vender seus produtos e serviços a qualquer hora e para qualquer lugar do mundo. </p>
                    </Conteudo>
                    <Conteudo value={value} index={2}>
                        <h3 style={H3Style}>Transmite confiança e credibilidade</h3>
                        <p style={PStyle} className="fst-italic">Confiança é a chave para as negociações entre empresa e consumidor.</p>
                        <p style={PStyle}> E se o seu negócio tem uma boa imagem no ambiente digital, com um site funcional e com bom design, você passa credibilidade e conquista muito mais a confiança do seu público. Por isso, hoje em dia, os consumidores já esperam que as empresas tenham um site próprio. Assim eles conseguem obter mais informações e se preparar melhor para uma compra. Se eles chegam no seu site e dão de cara com depoimentos (principalmente em vídeo), uma boa quantidade de curtidas, comentários positivos e outras provas sociais de que o seu produto ou serviço é de qualidade, então… Você ganha muito mais moral com o seu potencial cliente. </p>
                    </Conteudo>
                </div>
            </div>
              
    </div>
    )
}
