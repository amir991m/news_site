import React, { useState, useEffect, useRef } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import { Link } from "react-router-dom"
import {
  SOuterContainer,
  SInnerContainer,
  SThumbRowScroll,
  SScrollButton,
  SThumbBoxMain,
  SThumbTitle,
  SThumbImageMain,
  SThumbRowWrapper,
  SThumbTextMain,
  SButtonRight,
  SButtonLeft,
} from "../../styles/ThumnailsMain.styled"
import IconSwitch from "../../components/IconSwitch"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { useGetPostsQuery } from "../api/apiSlice"
import { STitleS } from "../../styles/Title.styled"
import { CategoryIcon } from "../../styles/Icons.styled"
import TimeAgo from "../../components/TimeAgo"

const ThumbnailsMain = () => {
  const [position, setPosition] = useState(0)
  const [distance, setDistance] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const moveMenu = () => {
    // console.log(container.current.container.current)
    const location = position * distance
    // console.log(
    //   "Right: Position" +
    //     position +
    //     "; Distance " +
    //     distance +
    //     "; Location " +
    //     location
    // )
    container.current
      .getElement()
      .scrollTo({ left: location, behavior: "smooth" })
  }

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions)
    return () => {
      window.removeEventListener("resize", setWindowDimensions)
      // console.log("width " + windowWidth)
      // console.log("height " + windowHeight)
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      position < 17 ? scrollRight() : setPosition(0)
    }, 5000)
    return () => clearInterval(interval)
  }, [position])

  const container = useRef(null)
  useEffect(() => {
    setDistance(container.current.container.current.scrollWidth / 20)
  }, [windowWidth, windowHeight])

  const eventDragEnd = (e, data) => {
    setPosition(
      Math.round(container.current.container.current.scrollLeft / distance)
    )
    moveMenu()
  }
  useEffect(() => {
    moveMenu()
  }, [position, distance])

  const scrollRight = () => {
    setPosition(Math.min(17, position + 1))
  }
  const scrollLeft = () => {
    setPosition(Math.max(0, position - 1))
  }

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery()

  let ThumbnailMain
  if (isLoading) {
    ThumbnailMain = <p>Loading...</p>
  } else if (isSuccess) {
    ThumbnailMain = posts.slice(0, 20).map((e, i) => (
      <Link to={`/page/${e.id}`} key={i}>
        <SThumbBoxMain>
          <CategoryIcon>
            <IconSwitch target={e.category} />
          </CategoryIcon>
          <SThumbImageMain
            src={`./images/articles/${e.id}.jpg`}
            alt={e.title}
          />
          <SThumbTextMain>
            <STitleS>{e.title}</STitleS>
            <span>
              <TimeAgo timestamp={e.date} />
            </span>
          </SThumbTextMain>
        </SThumbBoxMain>
      </Link>
    ))
  } else if (isError) {
    ThumbnailMain = <p>{error}</p>
  }

  return (
    <>
      <SOuterContainer>
        <SScrollButton onClick={scrollLeft}>
          <SButtonLeft>
            <FaArrowAltCircleLeft />
          </SButtonLeft>
        </SScrollButton>
        <SInnerContainer>
          <ScrollContainer
            onEndScroll={eventDragEnd}
            ref={container}
            activationDistance={10}
          >
            <SThumbRowScroll>
              <SThumbRowWrapper>{ThumbnailMain}</SThumbRowWrapper>
            </SThumbRowScroll>
          </ScrollContainer>
        </SInnerContainer>
        <SScrollButton onClick={scrollRight}>
          <SButtonRight>
            <FaArrowAltCircleRight />
          </SButtonRight>
        </SScrollButton>
      </SOuterContainer>
    </>
  )
}

export default ThumbnailsMain
