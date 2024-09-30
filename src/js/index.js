import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import '../styles/index.css';

// Componente SimpleCounter
function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="number">{props.digitFour % 10}</div>
            <div className="number">{props.digitThree % 10}</div>
            <div className="number">{props.digitTwo % 10}</div>
            <div className="number">{props.digitOne % 10}</div>
        </div>
    );
}

// Defino las prop types
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

// Lógica del contador
let counter = 0;
const root = ReactDOM.createRoot(document.querySelector('#app'));

// Actualiza cada 200 ms
setInterval(() => {
    // Calcula los dígitos
    const four = Math.floor(counter / 1000);
    const three = Math.floor((counter / 100) % 10);
    const two = Math.floor((counter / 10) % 10);
    const one = Math.floor(counter % 10);
    
    // Incremento el contador
    counter += 2; // Cambia a 2 para que sea más rápido

    // Renderizo la aplicación React
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
}, 200); // Cambiado a 200 para contar cada 200 ms



