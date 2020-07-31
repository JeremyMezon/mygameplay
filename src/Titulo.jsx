import React from 'react';

const Titulo = (props)=> (
    <>
        <div className="col-12">
            <div className="d-flex flex-column titulo">
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
            </div>
        </div>
    </>
)

Titulo.defaultProps = {
    titulo: "Sin Titulo",
    subtitulo: ""
}

export default Titulo