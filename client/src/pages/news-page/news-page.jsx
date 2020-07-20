import React from 'react'
import { Categories } from '../../components/categories/categories'
import { Channels } from '../../components/channels/channels'
import { categories }   from '../../components/categories/category-list'
import './news-page.scss'



export class NewsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            categoryList : categories
             
        }
    }
    
    render() {
        return (
            <div className ="content">

                <Channels />
                <Categories categoryList = {this.state.categoryList} />
                
            </div>
            
            
        )
    }
}
