import React from 'react'
import SectionTitle from '../SectionTitle'
import FaqItem from './components/FaqItem'

export default function Faq() {
    return (
        <div style={{padding: '60px 0'}}>
            <div className="container">
                <SectionTitle title='F.A.Q' paragraph='Perguntas Frequentes'/>
                <FaqItem 
                    pergunta='Non consectetur a erat nam at lectus urna duis?'
                    resposta='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'    
                />
                <FaqItem 
                    pergunta='Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?'
                    resposta='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.'  
                />
                <FaqItem 
                    pergunta='Non consectetur a erat nam at lectus urna duis?'
                    resposta='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'    
                />
                <FaqItem 
                    pergunta='Non consectetur a erat nam at lectus urna duis?'
                    resposta='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'    
                />
                <FaqItem 
                    pergunta='Non consectetur a erat nam at lectus urna duis?'
                    resposta='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'    
                />
            </div>
        </div>
    )
}
