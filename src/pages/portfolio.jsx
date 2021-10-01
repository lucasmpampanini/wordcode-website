import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PortfolioBody from '../components/PortfolioBody'

export default function Portfolio() {
    return (
        <div>
            <Header />
            <Breadcrumbs nomeDaPagina='Portfólio'/>
                <div style={{marginTop: 80}}>
                    <PortfolioBody />
                </div>
            <Footer />
        </div>
    )
}
