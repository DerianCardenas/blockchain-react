import React from 'react';
import {Button} from 'reactstrap'
const SSD = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
    }
    let {id,nombre,espacio,img,fabricante,serie,tokens} = props.el;
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
                        <li>Espacio: {espacio}</li>
                        <li>Fabricante: {fabricante}</li>
                        <li>Serie: {serie}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default SSD;