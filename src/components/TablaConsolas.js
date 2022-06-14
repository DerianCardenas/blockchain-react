import React from 'react';
import Consolas from './P_Consolas.js'
const TablaConsolas = (props) =>{
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let consolas = props.dataconsolas;
    return (
        <div>
            <hr></hr>
            <h2 className="subtitulo">CONSOLAS DE VIDEOJUEGOS</h2>
                <div id="consolas" className="products">
                        {consolas.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        consolas.map((el)=>
                                        <Consolas 
                                        key={el.id} 
                                        el = {el} 
                                        balance = {balance}
                                        setAccountBalance={setAccountBalance}
                                        />)
                                    )}
                    </div>
        </div>
    );
}
export default TablaConsolas;