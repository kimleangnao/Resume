import { useEffect, useState } from "react";

import profilePic from "../resources/images/new_picture.jpg"
import image from "../resources/images/divine-being-2.png"
import Nav from "./components/Nav";
import { Link } from "react-router-dom";


const Welcome = ({activeNumber}) => {
    const [viewportWidth] = useState(window.innerWidth);

    const [alreadyVisited, setAlreadyVisited] = useState(false);


    const [showtext, setshowtext] = useState(false)
    const [showinfo, setshowinfo] = useState(false)
    const [hideWelcome, sethideWelcome] = useState(false)
    const [showAbsoluteLayer, setshowAbsoluteLayer] = useState(false)

    setTimeout(function(){
        setshowAbsoluteLayer(true)
    }, 3000)

    setTimeout(function(){
        sethideWelcome(true)
    }, 9000)
    setTimeout(function(){
        setshowinfo(true)
    }, 10500)
    setTimeout(function(){
        setshowtext(true)
    }, 12000)

    useEffect(() => {
        const storedVisit = localStorage.getItem("welcomeAnimationPlayed");
        if (storedVisit) {
          setAlreadyVisited(true);
        } else {
          localStorage.setItem("welcomeAnimationPlayed", true);
        }

        //i don't want animation to display on smaller port,

    }, [])

    return(
        <div >
            {
                alreadyVisited || (viewportWidth < 1280 && viewportWidth > 700)? (
                    <div className="welcomeStatic">
                        <div className="welcomeStatic_background" >
                            <div className="welcomeStatic_background_iAm" > 
                                
                            </div>
                            <div className="welcomeStatic_background_info" > 
                                <div className="welcomeStatic_background_info_image" > 
                                    <img src={profilePic} alt="not found" className="welcomeStatic_background_info_image_profile" />
                                </div>
                                <div className="welcomeStatic_background_info_texts" > 
                                    <p className="welcomeStatic_background_info_texts_name" >KIMLEANG NAO</p>
                                    <p className="welcomeStatic_background_info_texts_title" >FRONT-END ENGINEER</p>
                                    <div className="welcomeStatic_background_info_texts_socialNetworks">
                                        <Link to="https://github.com/kimleangnao" target="_blank" rel="noopener noreferrer">
                                        <span className="fa-brands fa-square-github"></span>
                                        </Link>
                                        <Link to="https://x.com/Kiml3ang" target="_blank" rel="noopener noreferrer">
                                        <span className="fa-brands fa-x-twitter"></span>
                                        </Link>
                                    </div> 
                                    <div className="welcomeStatic_background_info_texts_group">
                                        <span>HTML</span> 
                                        <span>CSS</span>
                                        <span>JavaScript</span>
                                        <span>React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="welcomeStatic_background_nav">
                                <Nav activeNumber={activeNumber} />
                            </div>

                        </div>
                    </div>
                ) : alreadyVisited == false && viewportWidth >= 1280 ? (
                    <div className="welcome">
                        <div className={showAbsoluteLayer ? "welcome_background welcome_background-animation" : "welcome_background"} >
                            <div className="welcome_background_white-1" >

                            </div>
                            <div className="welcome_background_white-2" > 
                                <div className={ showinfo ? " welcome_background_white-2_showInfo" : "welcome_background_white-2_hiddenInfo" }> 
                                    <div className={showtext ? "welcome_background_white_wrapper welcome_background_white_wrapper-show" : "welcome_background_white_wrapper"}>
                                        <div className="welcome_background_white_wrapper_picture">
                                            <img src={profilePic} alt="not found" className="welcome_background_white_wrapper_picture_image" />
                                        </div>
                                        <div className="welcome_background_white_wrapper_texts">
                                            <p className="welcome_background_white_wrapper_texts_name">KIMLEANG NAO</p>
                                            <p className="welcome_background_white_wrapper_texts_title">FRONT-END ENGINEER</p>
                                            <div className="welcomeStatic_background_info_texts_socialNetworks">
                                                <Link to="https://github.com/kimleangnao" target="_blank" rel="noopener noreferrer">
                                                <span className="fa-brands fa-square-github"></span>
                                                </Link>
                                                <Link to="https://x.com/Kiml3ang" target="_blank" rel="noopener noreferrer">
                                                <span className="fa-brands fa-x-twitter"></span>
                                                </Link>
                                            </div> 

                                            <div className="welcome_background_white_wrapper_texts_group">
                                                <span>HTML</span> 
                                                <span>CSS</span>
                                                <span>JavaScript</span>
                                                <span>React</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="welcome_background_white-3" >  
                                    
                                <Nav  activeNumber={activeNumber} />
                            
                            </div>
                        </div>
                        <div className={hideWelcome ?  "welcome_box-hidden" : "welcome_box"}>
                            <div className="welcome_box_title">
                                WELCOME
                            </div>
                        </div>
                    </div> 
                ) : viewportWidth < 700 ? (
                  
                    <div className="welcomeStatic">
                        {  
                    alert("This website does not support mobile viewport!!!")}
                        <div className="welcomeStatic_background" >
                            <div className="welcomeStatic_background_iAm" > 
                                
                            </div>
                            <div className="welcomeStatic_background_info" > 
                                <div className="welcomeStatic_background_info_image" > 
                                    <img src={profilePic} alt="not found" className="welcomeStatic_background_info_image_profile" />
                                </div>
                                <div className="welcomeStatic_background_info_texts" > 
                                    <p className="welcomeStatic_background_info_texts_name" >KIMLEANG NAO</p>
                                    <p className="welcomeStatic_background_info_texts_title" >FRONT-END ENGINEER</p>
                                    <div className="welcomeStatic_background_info_texts_socialNetworks">
                                        <Link to="https://github.com/kimleangnao" target="_blank" rel="noopener noreferrer">
                                        <span className="fa-brands fa-square-github"></span>
                                        </Link>
                                        <Link to="https://x.com/Kiml3ang" target="_blank" rel="noopener noreferrer">
                                        <span className="fa-brands fa-x-twitter"></span>
                                        </Link>
                                    </div> 
                                    <div className="welcomeStatic_background_info_texts_group">
                                        <span>HTML</span> 
                                        <span>CSS</span>
                                        <span>JavaScript</span>
                                        <span>React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="welcomeStatic_background_nav">
                                <Nav activeNumber={activeNumber} />
                            </div>

                        </div>
                    </div>
                ) : ""
            }
            
        </div>
    )
}


export default Welcome;