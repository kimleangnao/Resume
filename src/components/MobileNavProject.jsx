


const MobileNavProject = ({hideMobileNav, setHideMobileNav, setProjectActiveIndex, projectActiveIndex}) => {

    const onChangeNav = (num) => {
        setHideMobileNav(!hideMobileNav)
        setProjectActiveIndex(num)
    }

    return(
   
        <ul className="mobile_projects_nav_ul">
            <button onClick={() => onChangeNav(0)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 0 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                1
            </button>
            <button onClick={() => onChangeNav(1)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 1 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                2
            </button>
            <button onClick={() => onChangeNav(2)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 2 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                3
            </button>
            <button onClick={() => onChangeNav(3)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 3 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                4
            </button>
            <button onClick={() => onChangeNav(4)} className={`mobile_projects_nav_ul_item ${projectActiveIndex == 4 ? "mobile_projects_nav_ul_item-active" : ""}`}>
                5
            </button>   
        </ul>
    
    )
}

export default MobileNavProject;