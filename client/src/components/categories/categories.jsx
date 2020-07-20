import React from 'react';
import './categories.scss'

export const Categories= (props) => {
    return(
            <div className="category-container">
                <div className="header-container">
                    <h1 className="header-text">Categories</h1>
                    <div className='circle'></div>
                </div>
                <div className="category-list">
                {props.categoryList.map((category) => (
                    <p className="category" >{category.name}</p>
                ))}
                </div>
            </div>
        
    )
}