import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'


export default function Preco() {
    return (
        <div>
            <Header />
            <Breadcrumbs nomeDaPagina='Preço'/>
                <div style={{marginTop: 80}}>
                  <Pricing />
                  <Faq />
                </div>
            <Footer />
        </div>
    )
}
