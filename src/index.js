import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badge
        firstName="Jhonatan" 
        lastName="Escalante" 
        avatarUrl="https://avatars2.githubusercontent.com/u/17649477?s=400&u=c01b57465ad5b987201364705de4a5b2f23a3f36&v=4"
        jobTitle="Frontend Engineer" 
        twitter="jhogakuse"
    />, 
    container
);
