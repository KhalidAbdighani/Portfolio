"use client"
import "./Header.css"
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";







export default function Header(){
    const [isopen,setisopen]=useState(false)
    
    const menu = ()=> {
        setisopen(!isopen)
    }
    
    
    
    return (
        <div className="H-W-header">
            <div className="header">
                <div className="myNmae"> 
                    <h3>More {"<me>"}</h3>
                </div>
                <nav className={`myInfo ${isopen? "open": ""}`}>
                   
                    
                    <ul>
                        <li><a href="#hero" onClick={menu}>About</a></li>
                        <li><a href="#skills" onClick={menu}>Skills</a></li>
                        <li><a href="#education" onClick={menu}>Education</a></li>
                        <li><a href="#contact" onClick={menu}>Contact</a></li>
                        <li><a href="#Projects" onClick={menu}>Projects</a></li>
                    </ul>
                    
                </nav>
                <div className="menu" onClick={menu} >

                    {isopen &&(

                        <RxCross1/>

                    )}
                    {!isopen &&(

                        <RiMenu3Line/>

                    )}
                    
                    </div>

            </div>

        </div>



    )
}