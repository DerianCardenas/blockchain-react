import React from 'react';
import Graficas from './P_Graficas.js'
const TablaGraficas =  (props) =>{
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let datagrafica =props.datagrafica;
    return (
        <div>
            <hr></hr>
            <h2 className="subtitulo">TARJETAS GRÁFICAS</h2>
                <div id="graficas" className="products">
                        {datagrafica.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        datagrafica.map((el)=>
                                        <Graficas 
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
export default TablaGraficas;