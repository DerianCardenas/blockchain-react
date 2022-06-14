import React from 'react';
import Producto from './P_Procesadores.js'
const TablaProc =  (props) => {
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let db = props.data;
    return(
        <div>
            <hr></hr>
                <h2 className="subtitulo">PROCESADORES</h2>
                    <div id="procesadores"className="products">
                        {db.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        db.map((el)=>
                                        <Producto 
                                        key={el.id} 
                                        el = {el} 
                                        balance={balance}
                                        setAccountBalance={setAccountBalance}
                                        />)
                                    )}
                    </div>
        </div>
    );
}
export default TablaProc;