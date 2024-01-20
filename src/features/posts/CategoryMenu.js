import React from "react"
import { useGetPostsByCategoryQuery } from "../api/apiSlice"
import {
  SCategoryThumb,
  SCategoryThumbImage,
  SCategoryThumbBody,
  SCategoryText,
} from "../../styles/Category.styled"
import { Link, useParams } from "react-router-dom"
import { STitleS, STitle } from "../../styles/Title.styled"
import TimeAgo from "../../components/TimeAgo"

const CategoryMenu = ({ target, number, sideMenu }) => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByCategoryQuery(target)

  let Articles = <p>Nista</p>
  if (isLoading) {
    Articles = <p>Loading...</p>
  } else if (isSuccess) {
    Articles = posts.slice(0, number).map((e, i) => (
      <Link to={`/page/${e.id}`} key={i}>
        <SCategoryThumb>
          <SCategoryThumbImage
            src={`./images/articles/${e.id}.jpg`}
            alt={e.title}
          />
          <SCategoryThumbBody>
            {sideMenu ? (
              <STitleS>{e.title}</STitleS>
            ) : (
              <STitle>{e.title}</STitle>
            )}
            <SCategoryText>{`${e.text.substring(0, 450)}...`}</SCategoryText>
            <span>
              <TimeAgo timestamp={e.date} />
            </span>
          </SCategoryThumbBody>
        </SCategoryThumb>
      </Link>
    ))
  } else if (isError) {
    Articles = <p>{error}</p>
  }

  return <>{Articles}</>
}

export default CategoryMenu
