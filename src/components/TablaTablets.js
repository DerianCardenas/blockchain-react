import React from 'react';
import Tablets from './P_Tablets.js'
const TablaTablets =  (props) => {
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let datatablets = props.datatablets;
    return(
        <div>
            <hr></hr>
                <h2 className="subtitulo">TABLETS</h2>
                    <div id="procesadores"className="products">
                        {datatablets.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        datatablets.map((el)=>
                                        <Tablets 
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
export default TablaTablets;