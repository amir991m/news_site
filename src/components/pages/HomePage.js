import React from 'react';
import ThumbnailsMain from '../ThumbnailsMain';
import ThumbnailsSecondary from '../ThumbnailsSecondary';
import content from '../../content';
import { SPage } from '../styles/Page.styled';
import { Link } from 'react-router-dom';
import AddPostPage from './AddPostPage';


const HomePage = () => {
  //console.log(content[0].date);
  return (
    <>
      <Link to="addPost">New post</Link>

      <ThumbnailsMain/>
      <ThumbnailsSecondary category="news" />
      <ThumbnailsSecondary category="world" />
      <ThumbnailsSecondary category="economy" />
      <ThumbnailsSecondary category="sport" />
      <ThumbnailsSecondary category="culture" />
      <ThumbnailsSecondary category="technology" />
    </>
  )
}

export default HomePage;

