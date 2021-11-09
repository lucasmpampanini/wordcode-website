import CardPortfolio from "./components/CardPortfolio";


export default function PortfolioBody() {
    return (
        <div>
           <div className="container">
               <div className="row col-12 align-items-center justify-content-center d-flex">
                    <CardPortfolio 
                        srcImg='/portfolio/ld-desktop.png' 
                        href='https://ldmind.com.br/'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/mecaparts-desktop.png' 
                        href='https://www.mecaparts.com.br/'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/charmedodido-desktop.png' 
                        href='https://charmedodido.com/'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/rnssolar-desktop.png' 
                        href="https://rnssolar.wordcode.com.br"
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/vmax-desktop.png' 
                        href="https://vmaxagencia.wordcode.com.br"
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/tsc.png' 
                        href='https://www.tsccaldeirariaindustrial.com.br'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/recuperadora.png' 
                        href='https://maxoriginalsolucoes.com.br'
                    />
                    <CardPortfolio 
                        srcImg='/portfolio/soft.png'
                        href='https://softconfor.wordcode.com.br' 
                    />

               </div>
           </div>
         
               
        </div>
    )
}