

import leftBarNavImage from "../resources/icons/other-nav.png"
import Nav from "./components/Nav";

const Other = ({activeNumber}) => {
    return(
        <div className="ceritification"> 
          
        <div className="ceritification_wrapper"> 
            <div className="ceritification_wrapper_navLeft"> 
                <img src={leftBarNavImage} alt="not found" className="ceritification_wrapper_navLeft_image" />
            </div>
            <div className="ceritification_wrapper_body">
                <div className="ceritification_wrapper_body_title">
                    Other projects
                </div>
                <p className="ceritification_wrapper_body_text">
                    Project A: Virtual World
                </p>
                <p className="ceritification_wrapper_body_text">
                    Project A: Game Engine
                </p>
              
                <Nav activeNumber={activeNumber} />
            </div>
        </div>
    </div>
    )
}

export default Other;