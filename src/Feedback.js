import React from 'react'

function Feedback({textoOK, textoNOK, funcaoOK, funcaoNOK}) {
    return (
        <div className="d-flex justify-content-center m-2">
            <button
                className="btn btn-primary"
                onClick={funcaoOK}>
                {textoOK}
            </button>

            <button
                className="btn btn-danger ms-2"
                onClick={funcaoNOK}>
                {textoNOK}
            </button>
        </div>
    )
}

export default Feedback
