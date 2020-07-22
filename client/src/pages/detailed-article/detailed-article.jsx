import React, { Component } from 'react'
import './detailed-article.scss'


export class DetailedArticle extends Component {
    constructor(props) {
        super(props)    
    }
    
    
    
    render() {
        console.log(this.props)

        return (
            <div className="detailed-page">
                <div className="article-container-da">
                    <div className="inset">
                    <div className="image-container">
                    <img src= {this.props.location.state.image} alt="123"/>
                    </div>
                    <div className="text-conatiner">
                        <h1 className="headline-text">{this.props.match.params.title}</h1>
                        <p className="description-text">{this.props.match.params.description}</p>
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
