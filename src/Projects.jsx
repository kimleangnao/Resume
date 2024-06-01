

import navImage from "../resources/icons/navbar-sign.png"
import Nav from "./components/Nav"
import { useState } from "react"
import ProjectDisplay from "./components/ProjectDisplay"

import projectOneImage from "../resources/images/jumping-woman.jpg"
import pomodoroImage from "../resources/images/pomodoro.png"
import blogImage from "../resources/images/blog.png"
import todolistImage from "../resources/images/todolist.png"
import tetrisImage from "../resources/images/tetris.png"
import MobileNavProject from "./components/MobileNavProject"

const Projects = ({activeNumber}) => {

    const [projects] = useState([
        {
            id: 1,
            projectName:"E-commerce - Summary points",
            projectLink: "https://github.com/kimleangnao/ecommerce",
            projectSummary: "E-commerce platform focusing on many different brands of shoes. The website offer users multiple tools to customizing their search, ensuring they find the perfect fit for their unique style. Customers can peruse reviews from other shoppers before making a purchase and also view shoes from various angles, empowering them to make informed decisions.",
            projectFeatures: ["Components Management in React","State Management", "Controlling State flow through components", "Sorting & Filtering", "User Create Reviews & Rating", "View Comments & Reviews", "Featured Pages: Specific Atheletes & Trend upkeep"],
            projectImage: projectOneImage,
            projectHowItWasDone: [],
            projectLearnt: [
                "I learnt to manage states effectively.", 
                "With so many differents components, I learnt to keep things organize.",
                "I learnt different ways of sorting through data and filtering it efficienctly.",
                "Throughout the process of developing this e-commerce website, I gained an appreciation for the challenges in coordinating the efforts of multiple team members to ensure seamless functionality. One notable challenge arose while sourcing shoe products for display, as I encountered various issues related to differences in background colors and image sizes across different websites and brands. Despite these complexities, I was able to overcome these obstacles and ensure a cohesive user experience."
            ],
        },
        {
            id: 2,
            projectName:"Pomodoro",
            projectLink: "https://github.com/kimleangnao/Pomodoro",
            projectSummary: "The Pomodoro Technique has become a popular approach to time management. It helps individuals maximize their focus during set periods to minimize distractions. For this website, simplicity is key. The aim is to provide users with two input fields—one for minutes and another for seconds—accompanied by straightforward start and stop buttons. Additionally, users have the option to set a break timer if desired.",
            projectFeatures: [
                "I start with a 2 simples pages, Home page and Theme page.", 
                "Home page for the input fields and keep track of real time", 
                "Theme page for changing fonts, sounds and background picture",
                "I used react useState() to store user's input and useEffect() to update the timer and keep user input in correct format",
                "I used media query for this website."
            
            ],
            projectImage: pomodoroImage,
            projectHowItWasDone: [],
            projectLearnt: [
                "This is the first project I learnt to effectively use useEffect().",
                "During the process of this website, I encounterd a 'weird' bug related to useEffect() and setInterval(). I managed to solved the bug and kept my sanity. The bug related to the use of setInterval() in useEffect().",
                "I learnt that media query and try to make the website reponsive for mobile can be challenging if I build pc focus first."
            ],
        },
        {
            id: 3,
            projectName:"Todo-list",
            projectLink: "https://github.com/kimleangnao/todolist",
            projectSummary: "This is a straightforward to-do list app. Users can easily add a list of tasks they need to complete. Once added, tasks can be marked as completed one by one or deleted entirely.",
            projectImage: todolistImage,
            projectFeatures: [
                "I start with a simple index.js, html.js, index.css",
                "I added a simple title, input field and a submit button (add button)",
                "Under it I created a display list with checkmark and deleted button",
                "After that I created a button to clear all",
                "With the html skeleton finished, I created a simple render function and addEventListener to all my 'buttons'",
                "The finishing touch is to connect html DOM to the JavaScript"

            ],
            projectHowItWasDone: [],
            projectLearnt: [
                "This is a simple app, using vanilla JavaScript and HTML with CSS. ",
                "I believe sometime with a simple app, there is no need to use big framework or fancy library, a simple vanilla way of doing it is just fine.",
                "Looking back at this app, it taught me how to use my tools for the task instead of trying to do something fancy that might just bloat the project for no reason."
            
            ],
        },
        {
            id: 4,
            projectName:"Blog",
            projectLink: "https://github.com/kimleangnao/Reactblog",
            projectSummary: "Welcome to our minimalist blog website. With simplicity at its core, the site features a clean home page showcasing all articles, ensuring easy access to content. Each article has its own view page for detailed reading. 'About' page provides quick insight into the author, enhancing user engagement. The design prioritizes intuitive navigation and a visually appealing experience, making browsing effortless and enjoyable.",
            projectImage: blogImage,
            projectFeatures: [
                "I start this minimalist blog with a simple homepage, aboutpage, and write page.",
                "The home page divided into 3 sections, (HTML & CSS), (JS & NODE & REACT), and the last section is about everything else.",
                "I created smaller components to organized the project.",
                "The same thing with about page.",
                "The write page is most complicated one out of all of these pages.",
                "I created my own editing tools like bold, italic, underline, strikethrough etc.",
                "Writer can create paragraph, image, lists, Codeblock..etc"
            ],
            projectHowItWasDone: [],
            projectLearnt: [
                "One of the most challenging aspects of this project has been sorting, filtering, and manipulating text for editing tools. Despite encountering seemingly many bugs, I persisted and successfully resolved each issue.",
                "This project helped me recognize the interconnectedness between backend, frontend, and design teams. Maintaining open communication and keeping each other updated on all necessary tasks proved essential for successful collaboration."
            ],
        },
        {
            id: 5,
            projectName:"Tetris",
            projectLink: "https://github.com/kimleangnao/tetrisgame",
            projectSummary: "This project marks one of my earliest creation in JavaScript, made at a time when I was just starting to grasp its fundamentals. I developed this classic Tetris game as a means to solidify my understanding of programming concepts, syntax and applying logic. Throughout its creation, I encountered many challenges, straddling the line between familiarity and uncertainty with JavaScript. Despite the hurdles, this project proved to be a valuable learning experience, allowing me to gain confidence and grow significantly in my programming journey.",
            projectFeatures: [
                "I start this project with a simple page.",
                "I divide the page into many section, for title, scores, control helper and ofcourse the game window.",
                "I use canvas to draw the window object and draw the shapes.",
                "There were 7 shapes, and I created 6 functions to translate each shape, using those function to rotate shape around, exclude square, well because it's a square.",
                "Then I wrote a random function to create random shape, tetris' pieces moving functions, and with many other functions to keep score, check if blocks connected in a line etc..."
            ],
            projectHowItWasDone: [],   
            projectImage: tetrisImage, 
            projectLearnt: [
                "This project challenging my understanding of JavaScript with applying game world logic.",
                "There were many bugs, but I managed to solved them and make this game function properly.",
                "Creating this game allowed me to understand the concept of clear planning and clear understanding of the subject(creation) at hand. Earlier in the development, I encounter many edges cases, because I didn't understand Tetris properly."
            ],
        }
    ])

    const [projectActiveIndex, setProjectActiveIndex] = useState(0)

   
    const [viewport] = useState(window.innerWidth)
    const [hideMobileNav, setHideMobileNav] = useState(true)

    const onControl = (num) => {
        console.log("CLICK!")
        setProjectActiveIndex(num)
    }

    return( 
        <div>
            {
                viewport < 720 ? (
                    <div className="mobile_projects">

                        {
                            hideMobileNav ? "" : (
                                <MobileNavProject setProjectActiveIndex={onControl} projectActiveIndex={projectActiveIndex} />          
                            )
                        }
                        
                        <button onClick={() => setHideMobileNav(!hideMobileNav)} className="mobile_projects_controlNav"></button>
                        <div className="mobile_projects_wrap">

                        </div>

                    </div>
                ) : 
                (
                    <div className="projects">
                        <div className="projects_background">
                            <div className="projects_background_nav">
                                <img src={navImage} alt="not found" className="projects_background_nav_image" />
                                <div className="projects_background_nav_menu">
                                    <button onClick={() => setProjectActiveIndex(0)} className={`projects_background_nav_menu_item ${projectActiveIndex == 0 ? "projects_background_nav_menu_item-active" : ""}`}>
                                        E-commerce
                                    </button>  
                                    <button onClick={() => setProjectActiveIndex(1)} className={`projects_background_nav_menu_item ${projectActiveIndex == 1 ? "projects_background_nav_menu_item-active" : ""}`}>
                                        Pomodoro
                                    </button>
                                    <button onClick={() => setProjectActiveIndex(2)} className={`projects_background_nav_menu_item ${projectActiveIndex == 2 ? "projects_background_nav_menu_item-active" : ""}`}>
                                        Todo-list
                                    </button>
                                    <button onClick={() => setProjectActiveIndex(3)} className={`projects_background_nav_menu_item ${projectActiveIndex == 3 ? "projects_background_nav_menu_item-active" : ""}`}>
                                        Blog
                                    </button>
                                    <button onClick={() => setProjectActiveIndex(4)} className={`projects_background_nav_menu_item ${projectActiveIndex == 4 ? "projects_background_nav_menu_item-active" : ""}`}>
                                        Tetris
                                    </button>
                                </div>
                            </div>
                            <ProjectDisplay  project={projects[projectActiveIndex]} />
                            <Nav  activeNumber={activeNumber} />
                        </div>
                    </div>
                )
            }
        </div>
       
        
    )
}

export default Projects;