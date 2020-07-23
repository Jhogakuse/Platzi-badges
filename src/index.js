// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('a', {href:'https://platzi.com'}, 'Ir a Platzi');
// const name = 'Rodolfo';
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola Soy ${name}`
// );

// const sum = (num1, num2) => num1 + num2;
// const jsx = <h1>Hola soy, {undefined}</h1>

const jsx = (<div>
    <h1>
        Hola, soy Jhonatan
    </h1>
    <p>Soy ingeniero de software</p>
</div>);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
