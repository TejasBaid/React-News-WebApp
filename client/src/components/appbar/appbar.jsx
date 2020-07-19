import React from 'react';
import './appbar.scss'

export const Appbar = () => {
    return(
        
        <div className='header'>
            <div href='/' className='logo-container' >
            <div className="logo">
                    <h1>NEWS</h1>
            </div>
            </div>
            <div className='options'>
            <a className='option'  href='/'>
                SHOP
            </a>
            <a className='option'  href='/'>
                CONTACT
            </a>
        </div>
        </div>
    )
}