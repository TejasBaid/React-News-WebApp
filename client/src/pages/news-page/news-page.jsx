import React from 'react'
import { Articles } from '../../components/news_board/news'
import { Sidebar } from '../../components/sidebar/sidebar'
import { categories }   from '../../components/categories/category-list'
import { NewsBoard } from '../../components/news_board/newsboard'
import './news-page.scss'



export class NewsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            categoryList : categories,
            Articles : Articles,
             
        }
    }
    
    render() {
        return (
            <div className ="content">
                <div className="side">
                <Sidebar categoryList = {this.state.categoryList} />
                </div>
                <div className="news-board">
                    <NewsBoard articles = {this.state.Articles}  />
                </div>
                
                
            </div>
            
            
        )
    }
}
