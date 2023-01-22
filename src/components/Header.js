import React from "react";
import { StyledHeader, Container, CategoryList, CategoryItem, Logo } from "./styles/Header.styled";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Link to="/">
                    <Logo src="./images/logo.png" alt="logo"/>
                </Link>
                                      
                <CategoryList>
                    
                    <Link to={`/category/news`}><CategoryItem>News</CategoryItem></Link>
                    <Link to={`/category/world`}><CategoryItem>World</CategoryItem></Link>
                    <Link to={`/category/economy`}><CategoryItem>Economy</CategoryItem></Link>
                    <Link to={`/category/sport`}><CategoryItem>Sport</CategoryItem></Link>
                    <Link to={`/category/culture`}><CategoryItem>Culture</CategoryItem></Link>
                    <Link to={`/category/technology`}><CategoryItem>Technology</CategoryItem></Link>
                </CategoryList>  
            </Container>
                     
        </StyledHeader>
        
    )
}

export default Header;