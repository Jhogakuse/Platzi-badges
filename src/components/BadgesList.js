import React, { Component } from 'react'

import './styles/Badge.css'

class BadgesList extends Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <div className="badge_section-name">
                                <img className="badge_avatar" src={badge.avatarUrl} alt={`${badge.firstName}_${badge.lastName}`} />
                                <p>
                                    {badge.firstName} {badge.lastName}
                                    <br/>
                                    @{badge.twitter}
                                    <br/>
                                    {badge.jobTitle}
                                </p>
                            </div>
                        </li> 
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;
