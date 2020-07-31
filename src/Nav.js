import React, {Component} from 'react';

class Nav extends Component{

    constructor(props){
        super(props);

        this.state = {
            logeado: "false"
        }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark text-white col-12 position-fixed navegacion">
                <a className="navbar-brand order-0" href="#">MyGameplay</a>
                <div className="order-2">
                    <input type="text" className="buscador text-white" placeholder="Tu juego favorito..."></input>
                </div>
                <div className="order-3">
                    <a href="#" className="btn btn-outline-primary"><i class="fas fa-user"></i></a>
                </div>
                <button className="navbar-toggler order-12" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="encage collapse navbar-collapse order-1 linea" id="navbarNavAltMarkup">
                    <div className="navbar-nav linea">
                        <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                    </div>
                </div>
                
            </nav>
        )
    }

}

export default Nav