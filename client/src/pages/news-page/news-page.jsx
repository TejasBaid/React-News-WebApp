import React from 'react'
import axios from 'axios';

import { Sidebar } from '../../components/sidebar/sidebar'
import { categories }   from '../../components/categories/category-list'
import { NewsBoard } from '../../components/news_board/newsboard'
import './news-page.scss'



export class NewsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            categoryList : categories,
            articles : [],
             
        }
        
    }
    
    componentDidMount() {
        axios.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=212db4bb333a4c68a374ae5fad3c2300`)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ articles:persons.articles });
          })
      }
    
    
    render() {
        return (
            <div className ="content">
                <div className="side">
                <Sidebar categoryList = {this.state.categoryList} />
                </div>
                <div className="news-board">
                    <NewsBoard articles = {this.state.articles}  />
                </div>
                
                
            </div>
            
            
        )
    }
}
