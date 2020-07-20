import React from 'react';
import Logo from  '../../assets/1.jpg'
import './newsboard.scss';

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
                <div className="news-article-lg">
                    <div className="image" >
                        <img className="img"  alt='Text' src= {Logo} />
                    </div>
                    <div className="text">
                        <h1 className="article-title-lg">
                            "Omnicom-owned advertising and PR agency GMMB faces allegations about microaggressions"
                        </h1>
                        <p className="article-description-lg">
                            "Hi! I'm Lauren Johnson, a senior advertising reporter at Business Insider, and welcome to Advertising Insider daily, where we brief you on the top advertising and media news. Subscribe here to get this newsletter in your inbox every weekday. Send any feedback…"
                        </p>
                    </div>
                    
                </div>
            </div>


        
        </div>
    )
}