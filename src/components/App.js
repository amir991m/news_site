import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/Global"
import Header from "./Header"
import Footer from "./Footer"
import ArticlePage from "../pages/ArticlePage"
import HomePage from "../pages/HomePage"
import CategoryPage from "../pages/CategoryPage"
import AddPostPage from "../pages/AddPostPage"
import ScrollToTop from "./ScrollToTop"

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "../features/api/apiSlice"

const App = () => {
  const lightMode = {
    mode: "light",
    background: "#caf0f8",
    primary: "#90e0ef",
    secondary: "#1c2541",
  }

  // PURPLE
  // const darkMode = {
  //   mode: "dark",
  //   background: "#003554",
  //   primary: "#051923",
  //   secondary: "#00a6fb",
  // }

  // GREEN
  // const darkMode = {
  //   mode: "dark",
  //   background: "#1b4332",
  //   primary: "#081c15",
  //   secondary: "#52b788",
  // }

  //BLUE
  const darkMode = {
    mode: "dark",
    background: "#0b2545",
    primary: "#13315c",
    secondary: "#8da9c4",
  }

  const [colors, setColors] = useState(darkMode)
  const [menu, setMenu] = useState("none")

  // useEffect(() => {
  //   setMenu("none")
  // })

  const switchMode = () => {
    colors.mode === "light" ? setColors(darkMode) : setColors(lightMode)
  }

  const openMenu = () => {
    menu === "none" ? setMenu("block") : setMenu("none")
  }

  const theme = {
    colors,
    size: {
      tablet: "768px",
      desktop: "1024px",
    },

    shadow: "1px 1px 5px", //shadow: '2px 2px 10px',
    gap: "0.5rem",
    borderEdges: "2%",
    menu,
  }
  console.log(menu)

  return (
    <ApiProvider api={apiSlice}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <BrowserRouter>
            <ScrollToTop />
            <Header switchMode={switchMode} theme={theme} openMenu={openMenu} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="page/:id" element={<ArticlePage />} />
              <Route path="category/:id" element={<CategoryPage />} />
              <Route path="addPost" element={<AddPostPage />} />
              <Route path="*" element={<h1>404 Not found</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      </ThemeProvider>
    </ApiProvider>
  )
}

export default App
