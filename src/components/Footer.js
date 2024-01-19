import React from "react"
import SocialIcons from "./SocialIcons"
import {
  SFooter,
  SFooterContainerRight,
  SList,
  SLogo,
} from "../styles/Footer.styled"
import { Link } from "react-router-dom"
import { SMenuButton, SMenuIcon } from "../styles/Header.styled"

const Footer = () => {
  return (
    <SFooter>
      <SList>
        <Link to={`/`}>Terms of Use</Link>
        <Link to={`/`}>About Us</Link>
        <Link to={`/`}>Privacy policy</Link>
        <Link to={`/`}>Contact Us</Link>
        <Link to={`/`}>Cookie Settings</Link>
        <Link to={`/`}>Adverise with Us</Link>
      </SList>
      <SFooterContainerRight>
        <SocialIcons />
      </SFooterContainerRight>
    </SFooter>
  )
}

export default Footer
