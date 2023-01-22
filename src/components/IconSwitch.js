import React from "react";
//import { NewsIcon, WorldIcon, EconomyIcon, SportIcon, CultureIcon, TechnologyIcon } from "./styles/Icons.styled";
import { FaNewspaper, FaGlobeAmericas, FaChartLine, FaVolleyballBall, FaTheaterMasks, FaMicrochip } from "react-icons/fa";
//import { SCategoryHeader } from "./styles/Category.styled";



    
const IconSwitch = ({target}) => {
    switch(target) {
        case "news":
            return <FaNewspaper/>
        case 'world':
            return <FaGlobeAmericas/>
        case 'economy':
            return <FaChartLine/>
        case 'sport':
            return <FaVolleyballBall/>
        case 'culture':
            return <FaTheaterMasks/>
        case 'technology':
            return <FaMicrochip/>
        return null
    }
}



export default IconSwitch;


//<SCategoryHeader><Link to={`/category/${category}`}>{IconSwitch}{` ${category}`}</Link></SCategoryHeader>