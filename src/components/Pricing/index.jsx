import React from 'react'
import PricingCard from './components/PricingCard'


export default function Pricing() {
    return (
            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional',
                        preco: 250,
                    }}
                    lista={[ 'Responsivo', '1 Ano de Hospedagem', 'Botão WhatsApp', 'Integração Redes Sociais', 'Banco de Imagens']} 
                    listaNa={['Dominio .com.br']}
                    
                />

                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional + Bolg',
                        preco: 450,
                    }}
                    lista={[ 'Dominio .com.br', 'Responsivo', '1 Ano de Hospedagem', 'Banco de Imagens', 'Botão WhatsApp', 'Blog', 'Area de administração']} 
                    destacar
                    
                />

              

            </div>

    )
}
