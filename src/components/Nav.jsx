

import { Link } from "react-router-dom";
import arrowDown from "../../resources/icons/sign-right.png"

const Nav = ({activeNumber}) => {
    return(
        <div className="global">
            <div className="global_nav">
                <Link to="/" className="global_nav_box">

                    <div className={activeNumber === 1 ? "global_nav_box_line global_nav_box_line-active" : "global_nav_box_line"}>

                    </div>

                </Link>
                <Link to="/projects" className="global_nav_box">

                    <div className={activeNumber === 2 ? "global_nav_box_line global_nav_box_line-active" : "global_nav_box_line"}>

                    </div>

                </Link>
                <Link to="/contact" className="global_nav_box">

                    <div className={activeNumber === 3 ? "global_nav_box_line global_nav_box_line-active" : "global_nav_box_line"}>

                    </div>

                </Link>
                <Link to="/about" className="global_nav_box">
                    <div className={activeNumber === 4 ? "global_nav_box_line global_nav_box_line-active" : "global_nav_box_line"}>

                    </div>
                </Link>
                {/*
                <Link to="/certification"  className="global_nav_box">
                    <div className={activeNumber === 5 ? "global_nav_box_line global_nav_box_line-active" : "global_nav_box_line"}>

                    </div>
                </Link>
                <Link to="/other" className="global_nav_box">
                    <div className={activeNumber === 6 ? "global_nav_box_line global_nav_box_line-active" : "global_nav_box_line"}>

                    </div>
                </Link>
                */}
                <div className="global_nav_box">
                    <img src={arrowDown} alt="not found" />
                </div>
            </div>
        </div>
    )
}

export default Nav;