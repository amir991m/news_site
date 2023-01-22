import React from 'react';
import { useGetPostQuery } from '../../features/api/apiSlice';
import { SArticlePage, SArticleTitle, SArticleImage, SArticleContainerMain, SArticleContainerLeft, SArticleContainerRight, SArticleText } from '../styles/ArticlePage.styled';
import { useParams } from 'react-router-dom';
import CategoryMenu from '../CategoryMenu';
import CategoryHeader from '../CategoryHeader';
import SocialIcons from '../SocialIcons';
import TimeAgo from '../TimeAgo';

const ArticlePage = () => {


  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostQuery(id)

  //console.log(id);
  //console.log(post);

  let Article;
  if (isLoading) {
    Article = <p>Loading...</p>
  } else if (isSuccess){
    Article = (
      <SArticlePage>
        <SArticleTitle>{post.title}</SArticleTitle>
        <SArticleContainerLeft>
          <SocialIcons />
          <TimeAgo timestamp={post.date}/>
        </SArticleContainerLeft>
        <SArticleContainerMain>
            <SArticleImage src={`./images/articles/${post.id}.jpg`} alt={post.title}/>
            <SArticleText>{post.text}</SArticleText>
            <p>{id}</p>
        </SArticleContainerMain>
        <SArticleContainerRight>
          <CategoryHeader category={post.category} />
          <CategoryMenu target={post.category} number={6}/>
        </SArticleContainerRight>
      </SArticlePage>   
    )
  } else if (isError) {
    Article = <p>{error}</p>
  }
  
  return (
      <>
          {Article}
      </>
    
  )
  }
    

export default ArticlePage;
