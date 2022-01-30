import React, { Component } from 'react';

const handleClicks = (WrappedComponent) => {

    
    class HandleClicks extends Component {
        
        state = {
            background: ''
        }
    
        handleClick = () => {
            if(WrappedComponent.name === 'Frieza') {
                this.setState({
                    background: 'bg-danger'
                })
            } else {
                this.setState({
                    background: 'bg-success'
                })
            }
        }

        render() {

            if(this.state.background === 'bg-danger') {
                throw new Error();
            }

            return <WrappedComponent clickHandler={this.handleClick} background={this.state.background}/>
        }
    }

    return HandleClicks;
}

export default handleClicks;