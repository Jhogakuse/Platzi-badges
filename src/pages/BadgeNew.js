import React from 'react';

import './styles/BadgeNews.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from "../api";
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {
    state = { 
        loading:false,
        error:null,
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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading:true, error:null});

        try {
            await api.badges.create(this.state.form);
            this.setState({loading:false});

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading:false, error:error});
        }
    }
    
    render() {
        if(this.state.loading) {
            return (
                <PageLoading />
            );
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'} 
                            lastName={this.state.form.lastName || 'LAST_NAME'} 
                            avatarUrl="https://avatars2.githubusercontent.com/u/17649477?s=400&u=c01b57465ad5b987201364705de4a5b2f23a3f36&v=4"
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
                            twitter={this.state.form.twitter || 'twiiter'}
                            email={this.state.form.email || 'EMAIL'}
                        />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default BadgeNew;
