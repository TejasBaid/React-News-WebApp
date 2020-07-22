import React from 'react';
import './newsboard.scss';

import { ArticleConatiner } from '../article-container/article-container'

export const NewsBoard = (props) => {
    return(
        <div className="newsboard" >
            <div className="header-container">
                <h1 className='headline-head' >{props.newsType}
                    <span className="headline-title">
                        Headlines
                    </span> 
                 </h1>
            </div>

            <div className="news-container">
                {props.articles.map(article => {
                    return(
                        <ArticleConatiner article= {article} />
                    )
                })}
                
                
            </div>

        </div>
    )
}
