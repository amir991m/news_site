import React from "react"
import { useGetPostsByCategoryQuery } from "../api/apiSlice"
import { Link } from "react-router-dom"
import {
  SContainer,
  SThumbRow,
  SThumbBoxSec,
  SSideMenuContainer,
  SSideMenuItem,
  SThumbTitle,
  SThumbImageSec,
  SThumbTextSec,
  SThumbImageSide,
  SThumbTextSide,
} from "../../styles/ThumnailsSecodary.styled"
import CategoryHeader from "../../components/CategoryHeader"
import IconSwitch from "../../components/IconSwitch"
import TimeAgo from "../../components/TimeAgo"
import { STitleS } from "../../styles/Title.styled"
import { CategoryIcon } from "../../styles/Icons.styled"

const ThumbnailsSecondary = ({ category }) => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByCategoryQuery(category)

  //console.log(posts)
  //console.log(category)

  let MainBox
  let SideBox
  if (isLoading) {
    MainBox = <p>Loading...</p>
  } else if (isSuccess) {
    MainBox = posts.slice(0, 4).map((e, i) => (
      <Link to={`/page/${e.id}`} key={i}>
        <SThumbBoxSec>
          <CategoryIcon>
            <IconSwitch target={category} />
          </CategoryIcon>
          <SThumbImageSec src={`./images/articles/${e.id}.jpg`} alt={e.title} />
          <SThumbTextSec>
            <STitleS>{e.title}</STitleS>
            <span>
              <TimeAgo timestamp={e.date} />
            </span>
          </SThumbTextSec>
        </SThumbBoxSec>
      </Link>
    ))
    SideBox = (
      <SSideMenuContainer>
        {posts.slice(4, 14).map((e, i) => (
          <Link to={`/page/${e.id}`} key={i}>
            <SSideMenuItem>
              <SThumbImageSide
                src={`./images/articles/${e.id}.jpg`}
                alt={e.title}
              />
              <SThumbTextSide>
                <STitleS>{e.title}</STitleS>
                <span>
                  <TimeAgo timestamp={e.date} />
                </span>
              </SThumbTextSide>
            </SSideMenuItem>
          </Link>
        ))}
      </SSideMenuContainer>
    )
  } else if (isError) {
    MainBox = <p>{error}</p>
    SideBox = <p>{error}</p>
  }

  return (
    <SContainer>
      <CategoryHeader category={category} />
      <SThumbRow>
        {MainBox}
        {SideBox}
      </SThumbRow>
    </SContainer>
  )
}

export default ThumbnailsSecondary
