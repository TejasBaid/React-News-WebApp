import React from 'react';
import './newsboard.scss';
import Truncate from 'react-truncate';

export const NewsBoard = (props) => {
    return(
        <div className="newsboard" >
            <div className="header-container">
                <h1 className='headline-head' >Today's
                    <span className="headline-title">
                        Headlines
                    </span> 
                 </h1>
            </div>

            <div className="news-container">
                {props.articles.map(article => {
                    return(
                        <div className="article-container">
                    <div className="news-article-sm">
                        <div className="image" >
                            <img className="img-sm"  alt='Text' src= {article.urlToImage} />
                        </div>
                        <div className="text">
                            <h1 className="article-title-sm">
                                {article.title}
                            </h1>
                            <p className="article-description-sm">
                             <Truncate lines={2} ellipsis={<span>... <a className="read-more" href='/'>Read more</a></span>}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe inventore iusto impedit quos iure doloribus ipsum ut quia nihil?
                            </Truncate>
                            </p>
                            
                        </div>
                        
                    </div>
                </div>
                    )
                })}
                
                
            </div>

        </div>
    )
}
