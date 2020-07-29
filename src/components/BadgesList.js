import React, { Component } from 'react'

import './styles/BadgesList.css'

import BadgesListItem from './BadgesListItem'

class BadgesList extends Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <BadgesListItem badge={badge} />
                        </li> 
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;
