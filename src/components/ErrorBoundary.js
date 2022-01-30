import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
        return { hasError: true };
    }
  
    /* componentDidCatch(error, errorInfo) { */
        // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
        /* logErrorToMyService(error, errorInfo); */
    /* } */
  
    render() {
        // Vous pouvez afficher n'importe quelle UI de repli.
        if (this.state.hasError) {
            return (
                <div className='bg-danger m-2 rounded'>
                    <div className="col d-flex justify-content-center align-items-center h-100">
                        <p className='error__card text-light'>Mauvaise réponse !</p>
                    </div>
                </div>
            )
        }
    
        return this.props.children;
    }
  }

  export default ErrorBoundary;