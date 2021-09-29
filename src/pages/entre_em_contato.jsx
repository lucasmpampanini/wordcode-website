import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Contato from '../components/Contato'


export default function PageContato() {
    return (
        <div>
          <Header />
            <Breadcrumbs nomeDaPagina='Contato'/>
                <div style={{marginTop: 80}}>
                    <Contato />
                </div>
            <Footer />  
        </div>
    )
}
