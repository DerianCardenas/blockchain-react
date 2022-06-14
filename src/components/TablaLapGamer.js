import React from 'react';
import LaptopGamer from './P_LaptopGamer.js'
const TablaLapGamer =  (props) =>{
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let datalapgamer =props.datalapgamer;
    return (
        <div>
            <hr></hr>
            <h2 className="subtitulo">LAPTOPS GAMER</h2>
                <div id="graficas" className="products extended max-2">
                        {datalapgamer.length === 0 ? (
                                <div>Sin datos</div>
                                    ):(
                                        datalapgamer.map((el)=>
                                        <LaptopGamer 
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
export default TablaLapGamer;