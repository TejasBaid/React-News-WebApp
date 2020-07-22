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
            newsType : "Today's",
            categoryList : categories,
            articles : [],
            givenArticles : [],
            url : `http://newsapi.org/v2/top-headlines?country=in&apiKey=212db4bb333a4c68a374ae5fad3c2300`,
            
             
        }
        
    }
    categoryListChange = async (ep, name) => {
        await this.setState({url :`http://newsapi.org/v2/top-headlines?country=in&category=${ep}&apiKey=212db4bb333a4c68a374ae5fad3c2300` })
        this.setState({newsType:name})
        await this.setState({givenArticles :[]})
        await axios.get(this.state.url)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({givenArticles : persons.articles})
          })
          
         window.scrollTo(0, 0)
         
        
    }
    
    componentDidMount() {
        // axios.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=212db4bb333a4c68a374ae5fad3c2300`)
        axios.get(this.state.url)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ articles:persons.articles });
            this.setState({givenArticles : this.state.articles})
          })
      }
    
    
    render() {
        return (
            <div className ="content">
                <div className="side">
                <Sidebar categoryList = {this.state.categoryList} listChange = {this.categoryListChange} />
                </div>
                <div className="news-board">
                    <NewsBoard articles = {this.state.givenArticles} newsType = {this.state.newsType}  />
                </div>
                
                
            </div>
            
            
        )
    }
}
