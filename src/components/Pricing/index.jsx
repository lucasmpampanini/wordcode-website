import React from 'react'
import PricingCard from './components/PricingCard'


export default function Pricing() {
    return (
            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '100%' }}>
                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional',
                        preco: '',
                    }}
                    lista={[  
                        'Dominio .com.br*',
                        'Certificado SSL', 
                        'Responsivo', 
                        '1 Ano de Hospedagem', 
                        'Botão WhatsApp', 
                        'Integração Redes Sociais',                     
                    ]} 
                    listaNa={[
                        'Blog',
                        'Area de administração',
                        'Conteúdo editorial',
                
                    ]}
                    destacar
                    
                />

                <PricingCard  
                    obj={{
                        titulo: 'Site Administrável',
                        preco: '',
                    }}
                    lista={[ 
                        'Dominio .com.br*',
                        'Certificado SSL',
                        'Responsivo', 
                        '1 Ano de Hospedagem',  
                        'Botão WhatsApp', 
                        'Integração Redes Sociais',
                        'Blog', 
                        'Area de administração'
                    ]}
                    listaNa={['Conteúdo editorial']} 
                    
                    
                />


                <PricingCard  
                    obj={{
                        titulo: 'Site Institucional + Blog',
                        preco: '',
                    }}
                    lista={[ 
                        'Dominio .com.br*', 
                        'Certificado SSL',
                        'Responsivo', 
                        '1 Ano de Hospedagem',  
                        'Botão WhatsApp', 
                        'Integração Redes Sociais',
                        'Blog', 
                        'Area de administração'
                    ]}
                    listaNa={['Conteúdo editorial']}
 
                    
                    
                />

              

            </div>

    )
}
