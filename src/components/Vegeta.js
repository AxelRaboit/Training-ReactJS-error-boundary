import React, { Component } from 'react';
import vegeta from '../images/vegeta.png';
import handleClicks from './HandleClicks';

class Vegeta extends Component {

    render() {

        const { background, clickHandler } = this.props;

        return (
            <div className={`bg-secondary m-2 rounded ${ background }`}>
                <div className="col">
                    <img onClick={ clickHandler } className='character__image' src={ vegeta } alt="image vegeta" />
                </div>
            </div>
        )
    }
}

export default handleClicks(Vegeta);
