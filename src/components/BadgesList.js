import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgesList.css'

import BadgesListItem from './BadgesListItem'

class BadgesList extends Component{
    render(){
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
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
