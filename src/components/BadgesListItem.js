import React, { Component } from 'react'

import './styles/BadgesList.css'

class BadgesListItem extends Component {
    render() {
        return (
            <div className="BadgesListItem">
                <img
                className="BadgesListItem__avatar"
                src={this.props.badge.image}
                alt={`${this.props.badge.name}`}
                />
                
                <div>
                    <strong>
                        {this.props.badge.name}
                    </strong>
                    <br />
                    @{this.props.badge.status}
                    <br />
                    {this.props.badge.species}
                </div>
            </div>
        );
    }
}

export default BadgesListItem;
