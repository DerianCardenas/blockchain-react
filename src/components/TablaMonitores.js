import React from 'react';
import Monitores from './P_Monitores.js'
const TablaMonitores =  (props) =>{
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let datamonitores =props.datamonitores;
    return (
        <div>
            <hr></hr>
            <h2 className="subtitulo">MONITORES</h2>
                <div id="graficas" className="products max-2">
                        {datamonitores.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        datamonitores.map((el)=>
                                        <Monitores 
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
export default TablaMonitores;