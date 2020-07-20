import React from 'react';
import { Categories } from '../categories/categories'
import { Channels } from '../channels/channels'
import './sidebar.scss'

export const Sidebar = (props) => {
    return(
        <div>
            <Channels />
            <Categories categoryList = { props.categoryList } />
        </div>
        

    )
}