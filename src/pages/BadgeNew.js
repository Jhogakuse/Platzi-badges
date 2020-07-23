import React from 'react';

import './styles/BadgeNews.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badge
                            firstName="Jhonatan" 
                            lastName="Escalante" 
                            avatarUrl="https://avatars2.githubusercontent.com/u/17649477?s=400&u=c01b57465ad5b987201364705de4a5b2f23a3f36&v=4"
                            jobTitle="Frontend Engineer" 
                            twitter="jhogakuse"
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default BadgeNew;
