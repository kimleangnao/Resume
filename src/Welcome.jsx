import { useState } from "react";

import arrowDown from "../resources/icons/sign-right.png"
import image from "../resources/images/divine-being-2.png"


const Welcome = () => {
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
    return(
        <div className="welcome">
            <div className={showAbsoluteLayer ? "welcome_background welcome_background-animation" : "welcome_background"} >
                <div className="welcome_background_white-1" >
                   
                </div>
                <div className="welcome_background_white-2" > 
                    <div className={ showinfo ? " welcome_background_white-2_showInfo" : "welcome_background_white-2_hiddenInfo" }> 
                        <div className={showtext ? "welcome_background_white_wrapper welcome_background_white_wrapper-show" : "welcome_background_white_wrapper"}>
                            <div className="welcome_background_white_wrapper_picture">
                                <img src={image} alt="not found" className="welcome_background_white_wrapper_picture_image" />
                            </div>
                            <div className="welcome_background_white_wrapper_texts">
                                <p className="welcome_background_white_wrapper_texts_name">KIMLEANG NAO</p>
                                <p className="welcome_background_white_wrapper_texts_title">WEB DEVELOPER</p>
                                <div className="welcome_background_white_wrapper_texts_group">
                                    <span>HTML</span> 
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>React</span>
                                    <span>NodeJs</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome_background_white-3" >  
                        
                    <div className="welcome_background_white_straight" >  
                        <div className="welcome_background_white_straight_box" >  
                            <div className="welcome_background_white_straight_box_line welcome_background_white_straight_box_line-active" >  

                            </div>
                        </div>
                        <div className="welcome_background_white_straight_box" >  
                            <div className="welcome_background_white_straight_box_line" >  

                            </div>

                        </div> 
                        <div className="welcome_background_white_straight_box" >  
                            <div className="welcome_background_white_straight_box_line" >  

                            </div>
                        </div>
                        <div className="welcome_background_white_straight_box" >  
                            <div className="welcome_background_white_straight_box_line" >  

                            </div>

                        </div>
                        <div className="welcome_background_white_straight_box" >  
                            <div className="welcome_background_white_straight_box_line" >  

                            </div>

                        </div>
                        <div className="welcome_background_white_straight_box" >  
                           <img src={arrowDown} alt="not found" className="welcome_background_white_straight_box_image"/>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className={hideWelcome ?  "welcome_box-hidden" : "welcome_box"}>
                <div className="welcome_box_title">
                    WELCOME
                </div>
            </div>

        </div>
    )
}


export default Welcome;