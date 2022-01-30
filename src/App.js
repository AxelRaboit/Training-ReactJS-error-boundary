import React, { Component } from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import Frieza from './components/Frieza';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className='container__content'>
        <div className='text-center p-2 bg-primary text-light'>
          <h1>Cliquez sur les gentils</h1>
        </div>
        <div className="container text-center">
          <div className="d-flex justify-content-center">
            <ErrorBoundary>
              <Vegeta />
            </ErrorBoundary>

            <ErrorBoundary>
              <Goku />
            </ErrorBoundary>

            <ErrorBoundary>
              <Frieza />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
