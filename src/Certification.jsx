


import leftBarNavImage from "../resources/icons/cert-nav.png"
import Nav from "./components/Nav";

const Certification = ({activeNumber}) => {
    return(
        <div className="ceritification"> 
          
            <div className="ceritification_wrapper"> 
                <div className="ceritification_wrapper_navLeft"> 
                    <img src={leftBarNavImage} alt="not found" className="ceritification_wrapper_navLeft_image" />
                </div>
                <div className="ceritification_wrapper_body">
                    <div className="ceritification_wrapper_body_title">
                        Certifications
                    </div>
                    <p className="ceritification_wrapper_body_text">
                        HTML / CSS
                    </p>
                    <p className="ceritification_wrapper_body_text">
                        JavaScript
                    </p>
                    <p className="ceritification_wrapper_body_text">
                       NodeJs
                    </p>
                    <p className="ceritification_wrapper_body_text">
                        Reactjs
                    </p>
                    <Nav activeNumber={activeNumber} />
                </div>
            </div>
        </div>
    )
}


export default Certification;