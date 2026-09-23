import "./contact.css"
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";



export default function Contact(){
    return(
        <section className="contact" id="contact">
            
            <div className="con-outter">
                    <div className="con-title">
                    <p>05 - </p>
                    <h2>Contact</h2>

                    </div>

               
                    <div className="con-info">
                        <p id="C1">My Contact</p>
                        <p id="C2">Links</p>

                    </div>

                    <div className="links">
                       <a className="con-github" href="https://github.com/KhalidAbdighani"
                        target="_blank"
                        rel="noopener noreferrer"><FaGithub/> GitHub</a>
                        
                        <a className="con-email" href="mailto:almursal45@gmail.com"><BiLogoGmail/> almursal45@gmail.com</a>
                        
                        <a className="con-linkedin"href="https://www.linkedin.com/in/khalid-abdighani-86520b3b2/"
                        target="_blank"
                        rel="noopener noreferrer"><FaLinkedin/> LinkedIn</a>

                    </div>



                

            </div>





        </section>
    )
}