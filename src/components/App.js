import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/Global';
import Header from './Header';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AddPostPage from './pages/AddPostPage';
import ScrollToTop from './ScrollToTop';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../features/api/apiSlice';

const theme = {
  colors: {
    background: '#caf0f8',
    primary: '#90e0ef',
    secondary: '#1c2541'
  },
  size: {
    tablet: '768px',
    desktop: '1024px'
  },

  shadow: '1px 1px 5px', //shadow: '2px 2px 10px', 
  gap: '0.5rem',
  borderEdges: '2%'
}

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
          <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <Routes> 
              <Route path="/" element={<HomePage />} />
              <Route path="page/:id" element={<ArticlePage />} />
              <Route path="category/:id" element={<CategoryPage />} />
              <Route path="addPost" element={<AddPostPage />} />
              <Route path="*" element={<h1>404 Not found</h1>} />
            </Routes>
        </BrowserRouter>
        </>
      </ThemeProvider>
    </ApiProvider>
     
  )
}

export default App;
