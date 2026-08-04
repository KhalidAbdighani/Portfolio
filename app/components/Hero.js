import "./hero.css"

export default function Hero (){
    return(
        <main className="hero" id="hero">


<div className="leftSection">
                    <div className="titles">
                    <p>SOFTWARE ENGINEER - ISTANBUL, 2026</p>
                    </div>


                    <div className="myName">
                        <h1>Khalid <br/> <span style={{color:"#c98a4b"}}>Abdighani</span>  <br/> Farah<br/></h1>
                    </div>



                    <div className="links" >

                    <div >
                        <button className="email"> <a href="mailto:almursal45@gmail.com">almursal45@gmail.com</a></button>
                    </div>

                    <div >
                        <button className="github"><a href="https://github.com/KhalidAbdighani"
                        target="_blank"
                        rel="noopener noreferrer"
                        >github/khalidAbdighani</a></button>
                        
                    </div>

                    </div>

                   

</div>


<div className="rightSection">
     <div className="paragraf">
                        <h1>Software Engineering student at Istanbul Sabahattin Zaim University, 3rd year. Building full-stack web applications with a focus on authentication systems, clean Architecture (MVC), REST APIs, and media processing workflows.<br/></h1>
                    </div>


            </div>
           

            
            
            


        </main>
    )
}