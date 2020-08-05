import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'

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

        clearTimeout(this.timeoutId)
    }
    
    render() {
        console.log('2/4. render()')
        if (this.state.error) {
            return (
                <div className="Badges__list">
                    <div className="Badges__container">
                        Error: {this.state.error.message};
                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
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
                
                {
                    this.state.loading && (
                        <div className="Badges__list">
                            <div className="Badges__container">
                                Loading ...
                            </div>
                        </div>
                    )
                }
                {/* {
                    !this.state.loading && (
                        <div className="Badges__container">
                            <div className="Badges__buttons">
                                <button onClick={() => this.fetchCharacters()} className="btn btn-primary">Load More</button>
                            </div>
                        </div>
                    )
                } */}
            </React.Fragment>
        );
    }
}

export default Badges;
