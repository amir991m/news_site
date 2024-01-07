import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"
import { SSocialIcons } from "../styles/Icons.styled"

export default function SocialIcons() {
  return (
    <SSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com">
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </li>
    </SSocialIcons>
  )
}
