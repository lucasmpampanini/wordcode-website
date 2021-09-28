import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ServicesRow from '../components/ServicesRow'

export default function Servicos() {
    return (
        <div>
            <Header />
            <Breadcrumbs nomeDaPagina='Serviços'/>
                <div style={{marginTop: 80}}>
                  <ServicesRow />
                  <Features />
                </div>
            <Footer />
        </div>
    )
}
