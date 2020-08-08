import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgesList.css'

import BadgesListItem from './BadgesListItem'

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLocaleLowerCase());
        });
        setFilteredBadges(result)
    }, [badges, query]);
    
    return {query, setQuery, filteredBadges}
}

function BadgesList (props){
    const badges = props.badges;
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);
    
    if(filteredBadges.length === 0) {
        return (
            <div>
                <div className="from-group mb-4">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>

                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        )
    }
    return(
        <React.Fragment>
            <div className="from-group mb-4">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`} >
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li> 
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default BadgesList;
