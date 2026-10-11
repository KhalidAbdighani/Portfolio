"use client"
import "./chatbox.css"
import { useState } from "react";
import { IoChatboxSharp } from "react-icons/io5";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { useRef, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";







export default function Chatbox(){
const [isopen,setisopen]=useState(false);
const boxRef = useRef(null); 
const [input, setInput] = useState("");
const [messages, setmessages]=useState([
    {
        sender:"AI", text:"Assalamu Alaikum, I Am Abu imran Ai Assistant!",
        
    },
    {
        sender:"AI", text:"What do you want to know abou Abu Imran?"
    }
])


const messagesEndRef = useRef(null);

   
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);



useEffect(() => {
        function handleClickOutside(event) {
           
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setisopen(false);
            }
        }

       
        document.addEventListener("mousedown", handleClickOutside);
        
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);





    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input;
 
        const newMessages = [...messages, { sender: "user", text: userText }];
        setmessages(newMessages);
        setInput("");



        try {
        
        const response = await fetch("http://localhost:5046/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userText }),
        });

        const data = await response.json();

        
        setmessages(prev => [...prev, { sender: "AI", text: data.reply }]);

    } catch (error) {
        console.error("Error connecting to backend:", error);
        setmessages(prev => [...prev, { sender: "AI", text: "Error while connecting to the server" }]);
    }

        
    };


    

const box = ()=> {
        setisopen(!isopen)
    }

    
    return (
        <div className="chatbox">


            
                <div ref={boxRef}  className={`F-box ${isopen? `F-boxOpen`:""}`} onClick={!isopen ? box : undefined} >

                    {!isopen &&(
                        < IoChatboxSharp className="chat-icon"/>

                    )}
                    {isopen &&(
                        <div className="chat-open" onClick={(e) => e.stopPropagation()}>
                            <div className="chat-header">
                                <TbMessageChatbotFilled className="ai-ico"/>
                                <div>
                                    <p style={{fontSize:"16px", padding:"0px"}}>Ask me?</p>
                                    <p style={{fontSize:"14px", color:"gray",padding:"0px"}}>AI Assistant</p>
                                </div>
                                
                            </div>


                            <div className="chat-mid">
                                {messages.map((msg,index)=>(
                                        <div key={index} style={{display:"flex", margin:"7px 0px"}}>
                                            {msg.sender === "AI" &&(
                                                <div style={{display:"flex"}}>
                                                <TbMessageChatbotFilled style={{color:"black", fontSize:"30px",flexShrink: 0}} className="ai-ico-mid"/>
                                                <div  style={{display:"flex",flexDirection:"column", alignItems:"start", padding:"3px 6px 0px 6px"}}>
                                                    <p style={{fontSize:"12px", color:"rgb(183, 183, 183)",padding:"0px"}}>AI Assistant</p>
                                                        <div >
                                                            <div className="ai-message" >
                                                                <p style={{color:"black", fontSize:"17px"}}>
                                                                    {msg.text}
                                                                </p>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            )}
                                            {msg.sender !=="AI" &&(
                                                <div style={{display:"flex"}}>
                                                <TbMessageChatbotFilled style={{color:"white", fontSize:"30px",flexShrink: 0}} className="ai-ico-mid"/>
                                                <div  style={{display:"flex",flexDirection:"column", alignItems:"start", padding:"3px 6px 0px 6px"}}>
                                                    <p style={{fontSize:"12px", color:"rgb(183, 183, 183)",padding:"0px"}}>You</p>
                                                        <div >
                                                            <div className="ai-message" >
                                                                <p style={{color:"black", fontSize:"17px"}}>
                                                                    {msg.text}
                                                                </p>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            )}
                                            
                                        </div>
                                    ))}
                                <div ref={messagesEndRef} />
                        
                            </div>


                            <div className="chat-fotter">
                                <form className="chat-fotter" onSubmit={handleSend} >
                                    <input className="write-box" type="text" placeholder="Write your message..." value={input}  onChange={(e) => setInput(e.target.value)}>
                                                
                                                
                                    </input>
                                    <button type="submit" className="send" style={{cursor:"pointer"}}>
                                        <IoIosArrowRoundForward style={{fontSize:"25px",  padding:"0px", color:"black"}}/>
                                    </button>

                                </form>

                                            
                                                
                                                
                                            
                            </div>

                        </div>
                    )}
                        

                    
                    

                </div>


        </div>
    )
}