import React from 'react';
import Truncate from 'react-truncate';
import './article-container.scss'
export const ArticleConatiner = (props) => {
   return(
    <div className="article-container">
    <div className="news-article-sm">
        <div className="image" >
            <img className="img-sm"  alt='Text' src= {props.article.urlToImage} />
        </div>
        <div className="text">
            <h1 className="article-title-sm">
                {props.article.title}
            </h1>
            <p className="article-description-sm">
             <Truncate lines={2} ellipsis={<span>... <a className="read-more" href='/'>Read more</a></span>}>
                {props.article.description}
            </Truncate>
            </p>
            
        </div>
        
    </div>
</div>
   )
}