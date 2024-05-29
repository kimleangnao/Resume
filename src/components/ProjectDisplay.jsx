
import { Link } from "react-router-dom";
import arrowImage from "../../resources/icons/arrow.png"


const ProjectDisplay = ({project}) => {
    return(
        <div className="projects_background_wrapper">
                    <Link to={`${project.projectLink}`} target="_blank"  className="projects_background_wrapper_image">
                        <img src={project.projectImage} alt="not found" className="projects_background_wrapper_image_src" />
                        <div className="projects_background_wrapper_image_tip">
                            <p>Click to go to GitHub Project&apos;s page</p>
                            <img src={arrowImage} alt="not found" className="projects_background_wrapper_image_arrow" />
                        </div>
                    </Link>
                    <div className="projects_background_wrapper_text">
                        <p className="projects_background_wrapper_text_title">{project.projectName}</p>
                        <p className="projects_background_wrapper_text_sum">
                            {project.projectSummary}
                        </p>

                        <p className="projects_background_wrapper_text_groupLead">Building Processes</p>
                        <ol>
                            {
                                project.projectFeatures.map((feature, index) => (
                                    <li key={index} className="projects_background_wrapper_text_text">{feature}</li>
                                ))
                            }
                        </ol>
                        {/*
                        <p className="projects_background_wrapper_text_groupLead">
                            Features
                        </p>
                        <ul>
                            {
                                project.projectHowItWasDone.map((how, index) => (
                                    <li key={index} className="projects_background_wrapper_text_text">{how}</li>
                                ))
                            }
                        </ul>
                        */}
                        <p className="projects_background_wrapper_text_groupLead">
                            What did I learn throughout this project
                        </p>
                        <ol>
                            {
                                project.projectLearnt.map((learnt, index) => (
                                    <li key={index} className="projects_background_wrapper_text_text">{learnt}</li>
                                ))
                            }
                    
              
                        </ol>
                      
                    </div>                
                </div>
    )
}

export default ProjectDisplay;