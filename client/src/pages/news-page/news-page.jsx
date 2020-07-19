import React from 'react'
import { Sidebar } from '../../components/sidebar/sidebar'
import './news-page.scss'



export class NewsPage extends React.Component {
    constructor() {
        super()
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className ="content">
                <Sidebar />
            </div>
            
            
        )
    }
}
