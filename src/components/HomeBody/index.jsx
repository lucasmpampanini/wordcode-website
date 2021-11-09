import React from 'react'
import AboutRow from '../AboutRow'
import ServicesRow from '../ServicesRow'
import Pricing from '../Pricing'
import SectionTitle from '../SectionTitle'
import Features from '../Features'
import PortfolioBody from '../PortfolioBody'

export default function HomeBody() {
    return (
        <div>
            <section id='servicesSection' style={{paddingTop: 80, margin: '200px 0 200px 0'}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Site' paragraph='O que esta incluso nos sites'/>
                    </div>
                    <ServicesRow />
                </div>
            </section>
            <section id='featuresSection' style={{paddingTop: 80, margin: '200px 0 200px 0'}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Vantagens' paragraph='Vantagens de se ter um site'/>
                    </div>
                    <Features />
                </div>
            </section>
            <section id='pricingSection' style={{paddingTop: 80, margin: '200px 0 200px 0'}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Preço' paragraph='Preço justo e alta qualidade'/>
                    </div>
                    <Pricing />
                </div>
            </section>
            <section id='portfolioSection' style={{paddingTop: 80, margin: '200px 0 200px 0'}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Portfólio' paragraph='Portfólio'/>
                    </div>
                    <PortfolioBody />
                </div>
            </section>
        </div>
    )
}
