import React from 'react'
import PricingCard from './components/PricingCard'

export default function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional',
                        preco: 250,
                    }}
                    lista={[ 'Responsivo', 'Hospedagem gratuita', 'até 5 paginas']} 
                    listaNa={['dominio']}
                    
                />

                <PricingCard  
                    obj={{
                        titulo: 'Site Para Imobiliaria',
                        preco: 495,
                    }}
                    lista={[ 'Dominio', 'Responsivo', 'Hospedagem gratuita', 'até 5 paginas']} 
                    destacar
                    
                />

                <PricingCard  
                    obj={{
                        titulo: 'Site Para Petshop',
                        preco: 345,
                    }}
                    lista={[ 'Dominio', 'Responsivo', 'Hospedagem gratuita', 'até 5 paginas']} 
                    
                    
                />

                <PricingCard  
                    obj={{
                        titulo: 'Site Para Academia',
                        preco: 345,
                    }}
                    lista={[ 'Dominio', 'Responsivo', 'Hospedagem gratuita', 'até 5 paginas']} 
                    
                    
                />

            </div>
        </div>

    )
}
