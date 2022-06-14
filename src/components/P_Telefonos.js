import React from 'react';
import {Button} from 'reactstrap'
const Telefonos = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
    }
    console.log(props)
    let {id,nombre,img,almacenamiento,memoria,marca,tokens} = props.el;
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
                        <li>Marca: {marca}</li>
                        <li>Almacenamiento: {almacenamiento}</li>
                        <li>Memoria RAM: {memoria}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default Telefonos;