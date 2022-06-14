import React from 'react';
import MemoriasRAM from './P_RAM.js';
const TablaRAM =  (props) =>{
    console.log(props)
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let dataram =props.dataram;
    return (
        <div>
            <hr></hr>
            <h2 className="subtitulo">MEMORIAS RAM</h2>
                <div id="graficas" className="products max-2">
                        {dataram.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        dataram.map((el)=>
                                        <MemoriasRAM 
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
export default TablaRAM;