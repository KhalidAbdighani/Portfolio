import Header from "./Header"
import Hero from "./Hero"
import Skills from "./Skills"
import Education from "./Education"
import "./project.css"



export default function MyMain (){
return (
    <div className="father">
        <Header/>

    <div className="myMain">
        <Hero/>
      
        <Skills/>
        <Education/>

        

    </div>

    </div>

)
}