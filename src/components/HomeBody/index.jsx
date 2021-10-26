import React from 'react'
import AboutRow from '../AboutRow'
import ServicesRow from '../ServicesRow'
import Pricing from '../Pricing'
import SectionTitle from '../SectionTitle'


export default function HomeBody() {
    return (
        <div>
            <section id='servicesSection' style={{paddingTop: 80}}>
                <div className="container">
                    <div className="row">
                        <SectionTitle title='Serviços' paragraph='O que esta incluso nos sites'/>

                    </div>
                    <ServicesRow />
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
            <AboutRow />
        </div>
    )
}
