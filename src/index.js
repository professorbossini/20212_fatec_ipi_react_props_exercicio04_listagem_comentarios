import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import faker from 'faker'
import Comentario from './Comentario'
import Cartao from './Cartao'
import ListaComentarios from './ListaComentarios'
import Feedback from './Feedback'
const App = () => {
    const textoOK = "Aprovar"
    const textoNOK = "Não aprovar"
    const funcaoOK = () => alert("Aprovado")
    const funcaoNOK = () => alert("Não aprovado")
    const feedbackComponent = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
 return (
    <ListaComentarios>
        
        <div className="row">
            <div className="col-12">
                <Cartao>
                    <Comentario nome={faker.name.findName()} texto={faker.lorem.sentences()} data={faker.date.recent().toLocaleDateString()} foto={faker.image.avatar()}/>
                    {feedbackComponent}
                </Cartao>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <Cartao>
                    <Comentario nome={faker.name.findName()} texto={faker.lorem.sentences()} data={faker.date.recent().toLocaleDateString()} foto={faker.image.avatar()}/>
                    {feedbackComponent}
                </Cartao>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <Cartao>
                    <Comentario nome={faker.name.findName()} texto={faker.lorem.sentences()} data={faker.date.recent().toLocaleDateString()} foto={faker.image.avatar()}/>
                    {feedbackComponent}
                </Cartao>
            </div>
        </div>
    </ListaComentarios>

 )
}
ReactDOM.render(
 <App />,
 document.querySelector('#root')
)