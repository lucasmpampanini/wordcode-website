import React from 'react'
import PricingCard from './components/PricingCard'


export default function Pricing() {
    return (
            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '100%' }}>
                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional',
                        preco: 250,
                    }}
                    lista={[  
                        'Certificado SSL', 
                        'Dominio .online*', 
                        'Dominio .xyz*', 
                        'Dominio .tech*', 
                        'Dominio .site*', 
                        'Dominio .space*',
                        'Dominio .website*',
                        'Dominio .store*', 
                        'Responsivo', 
                        '1 Ano de Hospedagem', 
                        'Botão WhatsApp', 
                        'Integração Redes Sociais', 
                        'Banco de Imagens'
                    ]} 
                    listaNa={['Dominio .com.br']}
                    
                />

                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional + Blog',
                        preco: 450,
                    }}
                    lista={[ 
                        'Certificado SSL',
                        'Dominio .com.br*', 
                        'Dominio .online*', 
                        'Dominio .xyz*', 
                        'Dominio .tech*', 
                        'Dominio .site*', 
                        'Dominio .space*',
                        'Dominio .website*',
                        'Dominio .store*', 
                        'Responsivo', 
                        '1 Ano de Hospedagem', 
                        'Banco de Imagens', 
                        'Botão WhatsApp', 
                        'Blog', 
                        'Area de administração']} 
                    destacar
                    
                />


                <PricingCard  
                    obj={{
                        titulo: 'Site + Sistema Web para Imobiliária',
                        preco: 999,
                    }}
                    lista={[ 
                        'Certificado SSL',
                        'Dominio .com.br*',
                        'Dominio .com*',  
                        'Dominio .online*', 
                        'Dominio .xyz*', 
                        'Dominio .tech*', 
                        'Dominio .site*', 
                        'Dominio .space*',
                        'Dominio .website*',
                        'Dominio .store*', 
                        'Responsivo', 
                        '1 Ano de Hospedagem', 
                        'Banco de Imagens', 
                        'Botão WhatsApp', 
                        'Blog', 
                        'Area de administração']} 
                    
                    
                />

              

            </div>

    )
}
