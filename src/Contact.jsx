

import { Link } from "react-router-dom";
import contactNavImage from "../resources/icons/contact-nav.png"
import Nav from "./components/Nav";

const Contact = ({activeNumber}) => {
    return(
        <div className="contact"> 
          
            <div className="contact_wrapper"> 
                <div className="contact_wrapper_navLeft"> 
                    <img src={contactNavImage} alt="not found" className="contact_wrapper_navLeft_image" />
                </div>
                <div className="contact_wrapper_body">
                    <div className="contact_wrapper_body_info">
                        <div className="contact_wrapper_body_info_title">
                            Let&apos;s work together
                        </div>
                        <div className="contact_wrapper_body_info_side">
                            Email : <a href="mailto:Kimleangn@gmail.come"> Kimleangn@gmail.come</a>
                        </div>
                        <div className="contact_wrapper_body_info_side">
                            X : <Link to="https://x.com/Kiml3ang" target="_blank" rel="noopener noreferrer">@kiml3ang</Link> 
                        </div>
                        <div className="contact_wrapper_body_info_title">
                            Want to know what I am up to?
                        </div>
                        <div className="contact_wrapper_body_info_side">
                            GitHub :  <Link to="https://github.com/kimleangnao" target="_blank" rel="noopener noreferrer"> https://github.com/kimleangnao</Link>
                        </div>
                        <div className="contact_wrapper_body_info_title">
                           Other interests
                        </div>
                        <div className="contact_wrapper_body_info_side">
                           Project A15X14
                        </div>
                        <div className="contact_wrapper_body_info_side-extend">
                          Currently I am working on &quot;Project A15x14&quot;. It&apos;s about human habits and progression toward goals.
                        </div>
                        
                    </div>
                    <Nav activeNumber={activeNumber} />
                </div>
            </div>
        </div>
    )
}

export default Contact;