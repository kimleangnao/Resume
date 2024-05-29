

import aboutNavImage from "../resources/icons/about-nav.png"
import Nav from "./components/Nav";

const About = ({activeNumber}) => {
    return(
        <div className="about"> 
          
            <div className="about_wrapper"> 
                <div className="about_wrapper_navLeft"> 
                    <img src={aboutNavImage} alt="not found" className="about_wrapper_navLeft_image" />
                </div>
                <div className="about_wrapper_body">
                    <div className="about_wrapper_body_title">
                        About me
                    </div>
                    <p className="about_wrapper_body_text">
                        Hello, I am Kimleang Nao, a highly skilled and detail-oriented Web Developer 
                        with over 3 years of experience in creating dynamic and responsive websites. 
                        My technical proficiency spans across HTML, CSS, JavaScript, and React, 
                        enabling me to build user-friendly and visually appealing web applications.
                    </p>
                    <p className="about_wrapper_body_text">
                        I have a keen ability to collaborate with cross-functional teams, 
                        ensuring seamless integration of client requirements and technical specifications. 
                        My strong problem-solving abilities have been instrumental in debugging complex issues, 
                        optimizing performance, and enhancing user experience.
                    </p>
                    <p className="about_wrapper_body_text">
                        I am particularly passionate about staying current with industry trends and technologies, 
                        regularly engaging in continuous learning. 
                        This proactive approach has equipped me with the latest tools and methodologies, 
                        allowing me to deliver cutting-edge solutions that meet modern web standards.
                    </p>
                    <Nav activeNumber={activeNumber} />
                </div>
            </div>
        </div>
    )
}


export default About;