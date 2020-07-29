import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Index from '../components/Index';
import Layout from '../components/Layout' 
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Redirect from="*" to="/404" />
                    <Route path="/404" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
