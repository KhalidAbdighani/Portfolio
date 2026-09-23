import "./project.css"

export default function Projects(){

    return(

        <section id="Projects">

                <div className="title-projects">
                <p>04 -</p>
                <h2>Projects</h2>
                </div>
                    
                    <a className="mp3" href="https://mp-3-converter-six.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer">

                        <div className="O" >

                                <div className="left">
                                    <div className="project1">
                                        <div>< h3>Mp3 converter</h3></div>
                                         <div><h4 className="backend">Backend</h4></div>
                                         <div><h4 className="IF">Functioning</h4></div>
                                    </div>

                                    <div className="project-skills">
                                        <div><p>Express.js</p></div>
                                        <div><p>FFmpeg</p></div>
                                        <div><p>Node.js</p></div>
                                    </div>


                                </div>

                                


                                <div className="right">

                                    <div className="About-project">
                                        <p>Online media conversion tool that processes video files into MP3 audio. Server-side FFmpeg integration for efficient media file processing and audio conversion.</p>
                                    </div>

                                </div>
                        
                    </div>
                    </a>
                    
                    <a className="mp3" href="https://video-downloader-phi-woad.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="O">

                                <div className="left">
                                    <div className="project1">
                                        <div>< h3>Video Downloader</h3></div>
                                         <div><h4 className="backend">Backend</h4></div>
                                         <div ><h4 className="NF">Not Functioning</h4></div>
                                    </div>

                                    <div className="project-skills">
                                        <div><p>Express.js</p></div>
                                        <div><p>FFmpeg</p></div>
                                        <div><p>yt-dlb</p></div>
                                        <div><p>Node.js</p></div>
                                    </div>


                                </div>

                                


                                <div className="right">

                                    <div className="About-project">
                                        <p>Web application for downloading YouTube videos. Server-side video processing and file handling built with Express.js and integrated with yt-dlp for media retrieval.</p>
                                    </div>

                                </div>
                        
                    </div>
                    </a>
                    

                 

        </section>

        

    )
}