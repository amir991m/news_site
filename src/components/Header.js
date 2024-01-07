import React, { useState } from "react"
import {
  StyledHeader,
  Container,
  CategoryList,
  CategoryItem,
  Logo,
  SThemeSwitch,
  SMenuButton,
  SMenuIcon,
  SNavigation,
  SLogoLine,
} from "../styles/Header.styled"
import { Link } from "react-router-dom"
import { FaSun, FaRegMoon, FaShapes } from "react-icons/fa"

const Header = ({ switchMode, theme, openMenu }) => {
  const icon = theme.colors.mode === "light" ? <FaSun /> : <FaRegMoon />
  const image =
    theme.colors.mode === "light"
      ? "./images/logoLight.svg"
      : "./images/logoDark.svg"
  console.log(icon)

  return (
    <StyledHeader>
      <Container>
        <SLogoLine>
          <SMenuButton onClick={() => openMenu()}>
            <SMenuIcon></SMenuIcon>
          </SMenuButton>
          <Link to="/">
            {/* <Logo>LOGO</Logo> */}
            <Logo src={image} alt="logo" />
          </Link>
        </SLogoLine>

        <SNavigation>
          <CategoryList onClick={() => openMenu()}>
            <Link to={`/category/news`}>
              <CategoryItem>News</CategoryItem>
            </Link>
            <Link to={`/category/world`}>
              <CategoryItem>World</CategoryItem>
            </Link>
            <Link to={`/category/economy`}>
              <CategoryItem>Economy</CategoryItem>
            </Link>
            <Link to={`/category/sport`}>
              <CategoryItem>Sport</CategoryItem>
            </Link>
            <Link to={`/category/culture`}>
              <CategoryItem>Culture</CategoryItem>
            </Link>
            <Link to={`/category/technology`}>
              <CategoryItem>Technology</CategoryItem>
            </Link>
          </CategoryList>
        </SNavigation>
        <SThemeSwitch onClick={() => switchMode()}>{icon}</SThemeSwitch>
      </Container>
    </StyledHeader>
  )
}

export default Header
