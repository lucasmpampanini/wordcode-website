import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutRow from '../components/AboutRow'
import Breadcrumbs from '../components/Breadcrumbs'
import Skills from '../components/Skills'

export default function SobreNos() {
    return (
        <div>
            <Header />
            <Breadcrumbs nomeDaPagina='Sobre Nós'/>
                <div style={{marginTop: 80}}>
                    <AboutRow />
                    <Skills />
                </div>
            <Footer />
        </div>
    )
}
