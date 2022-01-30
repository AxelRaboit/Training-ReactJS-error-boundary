import React, { Component } from 'react';
import frieza from '../images/frieza.png';
import handleClicks from './HandleClicks';

class Frieza extends Component {

    render() {

      const { background, clickHandler } = this.props;

      return (
          <div className={`bg-secondary m-2 rounded ${ background }`}>
              <div className="col">
                  <img onClick={ clickHandler } className='character__image' src={ frieza } alt="image frieza" />
              </div>
          </div>
      )
    }
}

export default handleClicks(Frieza);
