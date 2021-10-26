import React from 'react'
import AboutRow from '../AboutRow'
import ServicesRow from '../ServicesRow'
import Pricing from '../Pricing'
import SectionTitle from '../SectionTitle'
import Features from '../Features'

export default function HomeBody() {
    return (
        <div>
            <section id='servicesSection' style={{paddingTop: 80}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Site Institucional' paragraph='O que esta incluso nos sites'/>
                    </div>
                    <ServicesRow />
                </div>
            </section>
            <section id='featuresSection' style={{paddingTop: 80}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Vantagens' paragraph='Vantagens de se ter um site'/>
                    </div>
                    <Features />
                </div>
            </section>
            <section id='pricingSection' style={{paddingTop: 80}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Preço' paragraph='Preço justo e alta qualidade'/>
                    </div>
                    <Pricing />
                </div>
            </section>
            <section id='aboutSection' style={{paddingTop: 80}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Sobre Nós' paragraph='Um pouco sobre a WordCode' />
                    </div>
                    <AboutRow />
                </div>
            </section>
        </div>
    )
}
