import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {

    constructor(props) {
        super(props);
        console.log('1. constructor()')

        this.state = {
            loading:true,
            error:null,
            info:[],
            data:[],
            nextPage:1
        }
    }

    componentDidMount() {
        console.log('3. componentDidMount()')

        this.fetchCharacters()

        this.intervalId = setInterval(this.fetchCharacters, 5000);
    }

    fetchCharacters = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.list();
            this.setState({loading:false, data:data});
        } catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()')
        console.log({
            prevProps: prevProps, 
            prevState: prevState,
        })
        console.log({
            props: this.props,
            state: this.state,
        })
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount')

        clearInterval(this.intervalId)
    }
    
    render() {
        console.log('2/4. render()')

        if (this.state.loading === true && this.state.data.length === 0) {
            return (
                <div className="Badges__list">
                    <div className="Badges__container">
                        <PageLoading />
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="Badges__list">
                    <div className="Badges__container">
                        <PageError error={this.state.error} />
                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Logo de la conferencia" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
