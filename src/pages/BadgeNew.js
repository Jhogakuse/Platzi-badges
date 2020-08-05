import React from 'react';

import './styles/BadgeNews.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = { 
        form : {
            email:"",
            firstName:"",
            jobTitle:"",
            lastName:"",
            twitter:"",
        } 
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            avatarUrl="https://avatars2.githubusercontent.com/u/17649477?s=400&u=c01b57465ad5b987201364705de4a5b2f23a3f36&v=4"
                            jobTitle={this.state.form.lastName} 
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                        />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default BadgeNew;
