import React from 'react'
import SectionTitle from '../SectionTitle'
import Progress from './components/Progress';



export default function Skills() {
    return (
        <div style={{padding: '60px 0'}}>
            <div className="container">

               <SectionTitle title='Skills' paragraph='Veja minhas skills'/>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        <Progress skill='HTML' valor='85%' />
                        <Progress skill='CSS' valor='95%' />
                        <Progress skill='JavaScript' valor='70%' />

                    </div>

                    <div className="col-lg-6">

                        <Progress skill='ReactJS' valor='65%' />
                        <Progress skill='Python' valor='85%' />
                        <Progress skill='Django' valor='65%' />

                    </div>

                </div>

            </div>
        </div>
    )
}
