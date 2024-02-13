

import navImage from "../resources/icons/navbar-sign.png"
import arrowImage from "../resources/icons/arrow.png"

import projectOneImage from "../resources/images/jumping-woman.jpg"

const Projects = () => {
    return( 
        <div className="projects">
            <div className="projects_background">
                <div className="projects_background_nav">
                    <img src={navImage} alt="not found" className="projects_background_nav_image" />
                    <div className="projects_background_nav_menu">
                        <div className="projects_background_nav_menu_item projects_background_nav_menu_item-active">
                        Project 1
                        </div>
                        <div className="projects_background_nav_menu_item">
                        Project 2
                        </div>
                        <div className="projects_background_nav_menu_item">
                        Project 3
                        </div>
                        <div className="projects_background_nav_menu_item">
                        Project 4
                        </div>
                        <div className="projects_background_nav_menu_item">
                        Project 5
                        </div>
                    </div>
                </div>
                <div className="projects_background_wrapper">
                    <div className="projects_background_wrapper_image">
                        <img src={projectOneImage} alt="not found" className="projects_background_wrapper_image_src" />
                        <div className="projects_background_wrapper_image_tip">
                            <p>Click to go to the website</p>
                            <img src={arrowImage} alt="not found" className="projects_background_wrapper_image_arrow" />
                        </div>
                    </div>
                    <div className="projects_background_wrapper_text">
                        <p className="projects_background_wrapper_text_title">Project 1</p>
                        <p className="projects_background_wrapper_text_sum">
                            A summary of what this project is about.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nam posuere vel arcu ac molestie. Praesent placerat dolor ut condimentum molestie. 
                            Nam elementum lectus sed eros sagittis volutpat. 
                            Suspendisse quis dignissim nibh, at faucibus tortor. 
                            Sed eu molestie elit. Nullam consequat mauris at dapibus 
                            viverra. Praesent porta convallis ex, sed luctus lacus mattis ac. 
                            In hac habitasse platea dictumst. Fusce vitae velit eu sem lobortis vulputate. 
                            Phasellus ac blandit sapien. Fusce viverra tincidunt dignissim. 
                            Integer eu rhoncus orci. 
                        </p>

                        <p className="projects_background_wrapper_text_groupLead">List Features</p>
                        <ol>
                            <li className="projects_background_wrapper_text_text">Feature 1</li>
                            <li className="projects_background_wrapper_text_text">Feature 2</li>
                            <li className="projects_background_wrapper_text_text">Feature 3</li>
                            <li className="projects_background_wrapper_text_text">Feature 4</li>
                        </ol>
                        <p className="projects_background_wrapper_text_groupLead">
                            Description of what you did to make the feature possible
                        </p>
                        <ul>
                            <li className="projects_background_wrapper_text_text">This is what I did.... something some thing with something on something</li>
                            <li className="projects_background_wrapper_text_text">This is what I did.... something some thing with something on something</li>
                            <li className="projects_background_wrapper_text_text">This is what I did.... something some thing with something on something</li>
                            <li className="projects_background_wrapper_text_text">This is what I did.... something some thing with something on something</li>
                        </ul>
                        <p className="projects_background_wrapper_text_groupLead">
                            What did I learn throughout this project
                        </p>
                        <ol>
                            <li className="projects_background_wrapper_text_text">Learnt 1</li>
                            <li className="projects_background_wrapper_text_text">Learnt 1</li>
                            <li className="projects_background_wrapper_text_text">Learnt 1</li>
                            <li className="projects_background_wrapper_text_text">Learnt 1</li>
                        </ol>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;