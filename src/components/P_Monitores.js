import React from 'react';
import {Button} from 'reactstrap'
const Monitores = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
    }
    let {id,nombre,img,fabricante,marca,tamaño,tokens} = props.el;
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
                        <li>Marca: {marca}</li>
                        <li>Tamaño: {tamaño}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default Monitores;