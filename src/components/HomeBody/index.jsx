import React from 'react'
import AboutRow from '../AboutRow'
import ServicesRow from '../ServicesRow'
import Pricing from '../Pricing'


export default function HomeBody() {
    return (
        <div>
            <ServicesRow />
            <section id='pricingSection' style={{paddingTop: 40}}>
                <Pricing />

            </section>
            <AboutRow />
        </div>
    )
}
