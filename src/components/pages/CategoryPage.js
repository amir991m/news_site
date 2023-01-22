import React from "react";
import { SCategoryContainer } from "../styles/Category.styled";
import { useParams } from "react-router-dom";
import CategoryHeader from "../CategoryHeader";
import CategoryMenu from "../CategoryMenu";
import { SPage } from "../styles/Page.styled";

const CategoryPage = () => {

    const { id } = useParams();

    return (
        <SPage>
            <SCategoryContainer>
                <CategoryHeader category={id}/>
                <CategoryMenu target={id} number={10}/>
            </SCategoryContainer>
        </SPage>
    )
}

export default CategoryPage;

