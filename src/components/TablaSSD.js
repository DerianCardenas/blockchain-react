import React from 'react';
import Ssd from './P_Ssd.js'
const TablaSSD =  (props) => {
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let datassd = props.datassd;
    return(
        <div>
            <hr></hr>
                <h2 className="subtitulo">DISCOS DE ESTADO SOLIDO</h2>
                    <div id="procesadores"className="products">
                        {datassd.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        datassd.map((el)=>
                                        <Ssd 
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
export default TablaSSD;