import React, { Component } from 'react';
import goku from '../images/goku.png';
import handleClicks from './HandleClicks';

class Goku extends Component {

    render() {

        const { background, clickHandler } = this.props;

        return (
            <div className={`bg-secondary m-2 rounded ${ background }`}>
                <div className="col">
                    <img onClick={ clickHandler } className='character__image' src={ goku } alt="image goku" />
                </div>
            </div>
        )
    }
}

export default handleClicks(Goku);
