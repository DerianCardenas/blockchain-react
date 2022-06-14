import React from 'react';
import {Button} from 'reactstrap'
const Tablets = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
    }
    let {id,nombre,ram,marca,espacio,img,procesador,tokens} = props.el;
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
        return(
            <div className="product extend-600">
                <div className="nombre">Nombre: {nombre}</div>
                <div className="cont-img-producto">
                    <img src={img} className="img-prod"></img>
                </div>
                <div className="datos-producto">
                    <ol>
                        <li>Procesador: {procesador}</li>
                        <li>Marca: {marca}</li>
                        <li>Espacio de Almacenamiento: {espacio}</li>
                        <li>Memoria RAM: {ram}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default Tablets;