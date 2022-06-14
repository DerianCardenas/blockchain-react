import React from 'react';
import {Button} from 'reactstrap'
import {ethers} from 'ethers'
const Producto = (props) => {
    let {id,nombre,img,cores,hilos,reloj,tokens} = props.el;
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
        if(balance>=tokens)
            startPayment(tokens);
        else{
            alert("Tokens no suficientes, consigue "+(balance-tokens)+" tokens más!!")
        }
    }
    const startPayment  = async(tokens)=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = "0x71489B0FFD7e7D36fC9A6Edb16973BF6e0931cD4"
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(tokens+'')
        });
        alert("La transaccion se llevó a cabo con la siguiente información: "+tx.hash);
    }

        return(
            <div className="product">
                <div className="nombre">Nombre: {nombre}</div>
                <div className="cont-img-producto">
                    <img src={img} className="img-prod"></img>
                </div>
                <div className="datos-producto">
                    <ol>
                        <li>Cores: {cores}</li>
                        <li>Hilos: {hilos}</li>
                        <li>Reloj Base: {reloj}</li>
                        <li>Tokens Necessarios: {tokens}</li>
                    </ol>
                </div>
                <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
            </div>
        );
}
export default Producto;