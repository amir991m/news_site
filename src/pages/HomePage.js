import React from "react"
import ThumbnailsMain from "../features/posts/ThumbnailsMain"
import ThumbnailsSecondary from "../features/posts/ThumbnailsSecondary"
import { SPage } from "../styles/Page.styled"
import { Link } from "react-router-dom"
import { SAround } from "../styles/ThumnailsMain.styled"

const HomePage = () => {
  //console.log(content[0].date);
  return (
    <>
      {/* <Link to="addPost">New post</Link> */}
      <SAround>
        <ThumbnailsMain />
        <ThumbnailsSecondary category="news" />
        <ThumbnailsSecondary category="world" />
        <ThumbnailsSecondary category="economy" />
        <ThumbnailsSecondary category="sport" />
        <ThumbnailsSecondary category="culture" />
        <ThumbnailsSecondary category="technology" />
      </SAround>
    </>
  )
}

export default HomePage
