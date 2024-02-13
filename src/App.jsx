
import {createRoot} from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Welcome from "./Welcome";
import Projects from "./Projects";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/" element={<Welcome />}></Route>
            </Routes>
        </BrowserRouter>

       
    )
}


const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />)