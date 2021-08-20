import React from 'react'

function ListaComentarios(props) {
    return (
        <div className={estilos.principal}>
            {props.children}
        </div>
    )
}

const estilos = {
    principal: 'container border border-warning rounded mt-3 p-3'
}

export default ListaComentarios
