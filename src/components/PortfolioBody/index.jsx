import CardPortfolio from "./components/CardPortfolio";


export default function PortfolioBody() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end'}} >
           <div className="container">
               <div className="row justify-content-center">
                    <CardPortfolio 
                        srcImg='/portfolio/ld-desktop.png' 
                        titulo='Site Institucional'
                        paragrafo='Site Institucional da empresa.'
                        href='https://ldmind.com.br/'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/mecaparts-desktop.png' 
                        titulo='Catálogo Virtual'
                        paragrafo='Catálogo virtual com orçamento por email e whatsapp'
                        href='https://www.mecaparts.com.br/'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/charmedodido-desktop.png' 
                        titulo='Site Institucional'
                        paragrafo='Site Institucional da pousada, conta com pré-reservas por whatsapp.'
                        href='https://charmedodido.com/'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/rnssolar-desktop.png' 
                        titulo='Blog e Catálogo Virtual'
                        paragrafo='Blog e catálogo virtual, conta com um simulador de economia de energia.'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/vmax-desktop.png' 
                        titulo='Site Institucional'
                        paragrafo='Site Institucional'
                    />
               </div>
           </div>
         
               
        </div>
    )
}