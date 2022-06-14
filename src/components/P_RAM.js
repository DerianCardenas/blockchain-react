import React from 'react';
import {Button} from 'reactstrap'
const RAM = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
    }
    let {id,nombre,img,fabricante,serie,tamaño,tipo,velocidad,tokens} = props.el;
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
        return(
            <div className="product">
                <div className="nombre">Nombre: {nombre}</div>
                <div className="cont-img-producto">
                    <img src={img} className="img-prod"></img>
                </div>
                <div className="datos-producto">
                    <ol>
                        <li>Fabricante: {fabricante}</li>
                        <li>Serie: {serie}</li>
                        <li>Tamaño: {tamaño}</li>
                        <li>Tipo: {tipo}</li>
                        <li>Velocidad: {velocidad}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default RAM;