


const MobileNavProject = ({setProjectActiveIndex, projectActiveIndex}) => {
    return(
   
        <ul className="mobile_projects_nav_ul">
            <button onClick={() => setProjectActiveIndex(0)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 0 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                1
            </button>
            <button onClick={() => setProjectActiveIndex(1)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 1 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                2
            </button>
            <button onClick={() => setProjectActiveIndex(2)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 2 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                3
            </button>
            <button onClick={() => setProjectActiveIndex(3)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 3 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                4
            </button>
            <button onClick={() => setProjectActiveIndex(4)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 4 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                5
            </button>   
        </ul>
    
    )
}

export default MobileNavProject;