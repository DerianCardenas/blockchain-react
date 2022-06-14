import React from 'react';
import {Button} from 'reactstrap'
const Consolas = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
    }
    console.log(props)
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let {id,nombre,img,fabricante,controles,espacio,tokens} = props.el;
        return(
            <div className="product">
                <div className="nombre">Nombre: {nombre}</div>
                <div className="cont-img-producto">
                    <img src={img} className="img-prod"></img>
                </div>
                <div className="datos-producto">
                    <ol>
                        <li>Fabricante: {fabricante}</li>
                        <li>N° Controles: {controles}</li>
                        <li>Memoria: {espacio}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default Consolas;