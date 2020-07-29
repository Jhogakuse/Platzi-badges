import React from 'react';

import LogoConf from '../images/logo conf.svg'
import Astronautas from '../images/astronautas.svg'

import './styles/Index.css'

import { Link } from 'react-router-dom';

class Index extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="Index_background">
                    <div className="container row">
                        <div className="Left_section col-4 center">
                            <center>
                                <img src={LogoConf} alt="LogoConf" className="LogoConfig"/>
                            </center>
                            <h1 className="Left_section_title">PRINT YOUR BADGES</h1>
                            <p>The easiest way to manage your conference</p>
                            <center>
                                <Link to="/badges" className="btn btn-primary Start_now center">Start now</Link>
                            </center>
                        </div>
                        <div className="Right_section col-7 center">
                            <img src={Astronautas} alt="Astronautas" className="Astronautas" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Index
