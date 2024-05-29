
import {createRoot} from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Welcome from "./Welcome";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
//import Certification from "./Certification";
//import Other from "./Others";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*
                <Route path="/other" element={<Other activeNumber={6} />}></Route>
                <Route path="/certification" element={<Certification activeNumber={5}  />}></Route>
                */}
                <Route path="/about" element={<About activeNumber={4}  />}></Route>
                <Route path="/contact" element={<Contact activeNumber={3}  />}></Route>
                <Route path="/projects" element={<Projects activeNumber={2}  />}></Route>
                <Route path="/" element={<Welcome activeNumber={1}  />}></Route>
            </Routes>
        </BrowserRouter>

       
    )
}


const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />)