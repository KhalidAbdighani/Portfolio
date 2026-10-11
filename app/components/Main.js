import Header from "./Header"
import Hero from "./Hero"
import Skills from "./Skills"
import Education from "./Education"
import Contact from "./Contact"
import Projects from "./Projects"
import Chatbox from "./Chatbox"
import "./Main.css"




export default function MyMain (){
return (
    <div className="father">
        <Header/>

    <div className="myMain">
        <Hero/>
      
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
        <Chatbox/>
        

        

    </div>

    </div>

)
}