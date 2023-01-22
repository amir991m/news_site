import React from "react";
import { Link } from "react-router-dom";
import { SCategoryHeader } from "./styles/Category.styled";
import IconSwitch from "./IconSwitch";


const CategoryHeader = ({category}) => {


    return (
        <>
            <SCategoryHeader><Link to={`/category/${category}`}><IconSwitch target={category}/>{` ${category}`}</Link></SCategoryHeader>
        </>
    )
}

export default CategoryHeader;
