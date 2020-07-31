import React, {Component} from 'react';

class CartaGameplay extends Component{
    constructor(props){
        super(props)

        this.state = {
            nombre: ""
        }
    }

    render(){
        return(
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card mb-5">
                    <img src={this.props.imagen} className="card-img-top img-fluid img-gameplay-card" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.genero}</p>
                        <div className="d-flex justify-content-between align-items-center align-content-center">
                            <p className="text-gris">{this.props.autor}</p>
                            <a className="btn-fav d-flex justify-content-center">
                                <i class="my-auto fas fa-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CartaGameplay.defaultProps = {
    imagen: "https://thumbs.dreamstime.com/b/ning%C3%BAn-icono-disponible-de-la-imagen-plano-ejemplo-del-vector-132484032.jpg",
    nombre: "No Game",
    genero: "---",
    autor:  "-Anonymous"
}

export default CartaGameplay;