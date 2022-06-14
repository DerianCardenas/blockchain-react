import React from 'react';
import Telefonos from './P_Telefonos.js'
const TablaTelefonos =  (props) => {
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let datacel = props.datatelefonos;
    return(
        <div>
            <hr></hr>
                <h2 className="subtitulo">SMARTPHONES</h2>
                    <div id="telefonos" className="products">
                            {datacel.length === 0 ? (
                                    <div>Sin datos</div>
                                        ):(
                                            datacel.map((el)=>
                                            <Telefonos 
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
export default TablaTelefonos;