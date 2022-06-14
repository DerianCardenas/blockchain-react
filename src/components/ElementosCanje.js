import React from 'react';
import TablaProc from './TablaProc.js'
import TablaGraficas from './TablaGraficas.js'
import TablaTelefonos from './TablaTelefonos.js'
import TablaTablets from './TablaTablets.js'
import TablaSSD from './TablaSSD.js'
import TablaRAM from './TablaRAM.js'
import TablaMonitores from './TablaMonitores.js'
import TablaConsolas from './TablaConsolas.js'
import TablaLapGamer from './TablaLapGamer.js'
let data =[
    {id:1,nombre:"AMD Ryzen 5 5600G",
        img:"https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SY450_.jpg", 
        cores:6,hilos:"16",reloj:"3.9 GHz",tokens:1},
    {id:2,nombre:"AMD Ryzen 5 5600X",
        img:"https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SX450_.jpg", 
        cores:6,hilos:"12",reloj:"3.7GHz",tokens:1},
    {id:3,nombre:"AMD Ryzen 7 5800X3D ",
        img:"https://m.media-amazon.com/images/I/61Kn0a98AIL._AC_SY450_.jpg", 
        cores:8,hilos:"16",reloj:"3.4GHz",tokens:3},
    {id:4,nombre:"AMD Ryzen9 5950X",
        img:"https://m.media-amazon.com/images/I/41zMmEd4VSL._AC_.jpg", 
        cores:16,hilos:"32",reloj:"3.4GHz",tokens:4}
]
let datagrafica = [
    {id:1,nombre:"Asus DUAL-RTX2060-O6G-EVO",tipo:"GDDR6",velocidad:"1785 MHz",
        img:"https://m.media-amazon.com/images/I/81murmTdjAL._AC_SY450_.jpg",
        coprocesador:"NVIDIA GeForce RTX 2060",memoria:"6 GB",interfaz:"PCI-Express x16",tokens:3},
    {id:2,nombre:"PowerColor Red Devil AMD Radeon™ RX 6800 XT",tipo:"GDDR6",velocidad:"16 GHz",
        img:"https://m.media-amazon.com/images/I/71ye82bMStL._AC_SX450_.jpg",
        coprocesador:"NVIDIA GeForce RTX 2060",memoria:"6 GB",interfaz:"PCI-Express x16",tokens:8},
    {id:3,nombre:"Nvidia GeForce RTX 3060 V2 Edición OC",tipo:"GDDR6",velocidad:"1867 MHz",
        img:"https://m.media-amazon.com/images/I/81si2RRaWUS._AC_SY450_.jpg",
        coprocesador:"NVIDIA GeForce RTX 3060",memoria:"12 GB",interfaz:"PCI-Express x16",tokens:3},
    {id:4,nombre:"Zotac Gaming GeForce RTX™ 3080 Ti Trinity OC",tipo:"GDDR6X",velocidad:"1695 MHz",
        img:"https://m.media-amazon.com/images/I/81TzR9+1IXL._AC_SX450_.jpg",
        coprocesador:"NVIDIA GeForce RTX 3080 Ti",memoria:"12 GB",interfaz:"PCI-Express x16",tokens:8}
]
let datatelefonos = [
    {id:1,nombre:"iPhone 13 Pro MAX",marca:"Apple",almacenamiento:"128 - 256 - 512 GB - 1TB",
    img:"https://m.media-amazon.com/images/I/61LqXPO+h1L._AC_SX466_.jpg",memoria:"6 GB",tokens:9},
    {id:2,nombre:"HUAWEI Nova 9 SE",marca:"Huawei",almacenamiento:"128 GB",
    img:"https://shop-cdncname.huawei.com/mx/uomcdn/MXHW/pms/202203/gbom/6941487251285/800_800_D33BF09FE2BDC33F9E5C3303E5DC0CBFmp.png",
    memoria:"6 GB",tokens:2},
    {id:3,nombre:"Motorola Edge 20 Pro",marca:"Motorola",almacenamiento:"256 GB",
    img:"https://m.media-amazon.com/images/I/51hTIoLNcnL._AC_SY450_.jpg",memoria:"12 GB",tokens:4},
    {id:4,nombre:"SAMSUNG Galaxy A53 8+",marca:"SAMSUNG",almacenamiento:"128 GB",
    img:"https://m.media-amazon.com/images/I/712fKCTJjbL._AC_SX679_.jpg",memoria:"8 GB",tokens:3}
]
let datatablets = [
    {id:1,nombre:"Galaxy Tablet S8 Ultra",ram:"12 GB",marca:"SAMSUNG",espacio:"256 GB",
        img:"https://cdn.pocket-lint.com/r/s/970x/assets/images/159973-tablets-review-hands-on-samsung-galaxy-tab-s8-ultra-review-image4-trdivhlgqj.jpg",procesador:"Snapdragon 8 Gen Octa-Core",tokens:10},
    {id:2,nombre:"HUAWEI MatePad Pro",ram:"6 GB",marca:"HUAWEI",espacio:"256 GB",
        img:"https://i.blogs.es/114d64/matepad-pro-pantalla/1366_2000.jpg",procesador:"HUAWEI Kirin 990 Octa-core",tokens:5},
    {id:3,nombre:"iPad Pro",ram:"8 GB",marca:"Apple",espacio:"256 GB",
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_GEO_MX_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617923546000",procesador:"M1 de Apple Octa-Core",tokens:19},
    {id:4,nombre:"Tab P11 Pro",ram:"8 GB",marca:"Lenovo",espacio:"128 GB",
        img:"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/195348115278_2.jpg",procesador:"Qualcomm® Snapdragon™ 730G Octa-core",tokens:4}
]
let datassd =[
    {id:1,nombre:"SAMSUNG 980 Pro",espacio:"1 TB",img:"https://m.media-amazon.com/images/I/61s8mTCMlUL._AC_SX355_.jpg",
        fabricante:"SAMSUNG",serie:"980 Pro",tokens:1},
    {id:2,nombre:"SAMSUNG 980 Pro",espacio:"2 TB",img:"https://m.media-amazon.com/images/I/61s8mTCMlUL._AC_SX355_.jpg",
        fabricante:"SAMSUNG",serie:"980 Pro",tokens:2},
    {id:3,nombre:"Kingston NV1 SNVS",espacio:"2 TB",img:"https://http2.mlstatic.com/D_NQ_NP_652936-MLA48049070510_102021-O.webp",
        fabricante:"Kingston",serie:"SNVS",tokens:1},
    {id:4,nombre:"XPG Spectrix S40G AS40G-2TT-C",espacio:"2 TB",img:"https://http2.mlstatic.com/D_NQ_NP_721733-MLA43578282256_092020-O.webp",
        fabricante:"XPG",serie:"2TT",tokens:2}
]
let dataram = [
    {id:1,nombre:"Corsair Vengeance RGB Pro",img:"https://m.media-amazon.com/images/I/61GpY38PAWL._AC_SY355_.jpg",
    fabricante:"CORSAIR",serie:"Vengeance RGB Pro",tamaño:"64 GB",tipo:"DDR4 SDRAM",velocidad:"3200 MHz",tokens:2},
    {id:2,nombre:"Crucial Memoria RAM",img:"https://m.media-amazon.com/images/I/61RMUrTPGKL._AC_SX355_.jpg",
    fabricante:"Crucial",serie:"Crucial Memoria",tamaño:"32 GB",tipo:"DDR4 SDRAM",velocidad:"3200 MHz",tokens:1}
]
let datamonitores = [
    {id:1,nombre:"LG 21: 9",img:"https://m.media-amazon.com/images/I/71Gl7YzlwBL._AC_SL1500_.jpg",marca:"LG",fabricante:"ZENI9",tamaño:"34 Pulgadas",tokens:31},
    {id:2,nombre:"Acer Predator XB321HK",img:"https://m.media-amazon.com/images/I/71uv9qGqhHL._AC_SY355_.jpg",marca:"Acer",fabricante:"Acer",tamaño:"32 Pulgadas",tokens:23}
]
let dataconsolas = [
    {id:1,nombre:"Play Station 5 Standard Edition",img:"https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SX522_.jpg",fabricante:"SONY",contorles:1,espacio:"628 GB",tokens:4},
    {id:2,nombre:"Xbox Series X",img:"https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",fabricante:"Microsoft",contorles:1,espacio:"1 TB",tokens:4},
    {id:3,nombre:"Nintendo Switch",img:"https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_SX425_.jpg",fabricante:"Nintendo",contorles:2,espacio:"64 GB",tokens:3},
    {id:4,nombre:"Valve's Steam Deck",img:"https://i.ebayimg.com/images/g/-2sAAOSwD5Rimn38/s-l500.jpg",fabricante:"Valve",contorles:1,espacio:"256 GB",tokens:6}
]
let datalapgamer = [
    {id:1,nombre:"MSI GS75 Stealth-479",img:"https://m.media-amazon.com/images/I/51BZEsLh4IL._AC_SX522_.jpg",
    marca:"MSI",procesador:"Core i9-9880h 2.3 - 4.8GHz",grafica:"NVIDIA GeForce RTX2080 Max-Q 8G GDDR6.",
    disco:"SSD - 1 TB",ram:"32 GB (16 GB x 2) - DDR4",tokens:43},
    {id:2,nombre:"MSI GT83 TITAN-014",img:"https://m.media-amazon.com/images/I/61eZLr1jCFL._AC_SX355_.jpg",
    marca:"MSI",procesador:"i7-8850H - 6 cores",grafica:"NVIDIA GeForce GTX 1080",
    disco:"SSD -512GB / HDD - 1TB",ram:"16 GB - DDR4",tokens:40}
]
function ElementosCanje (props) {
    const accountBalance = props.accountBalance;
    const setAccountBalance = props.setAccountBalance;
    return(
            <div className="cont-products">
                <TablaProc 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    data={data}/>
                <TablaGraficas 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    datagrafica={datagrafica}/>
                <TablaTelefonos 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    datatelefonos={datatelefonos}/>
                <TablaTablets 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    datatablets={datatablets}/>
                <TablaSSD 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    datassd ={datassd}/>
                <TablaRAM 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    dataram={dataram}/>
                <TablaMonitores 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    datamonitores={datamonitores}/>
                <TablaConsolas 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    dataconsolas={dataconsolas}/>
                <TablaLapGamer 
                    balance={accountBalance} 
                    setAccountBalance={setAccountBalance}
                    datalapgamer={datalapgamer}/>
                </div>
    );
}
export default ElementosCanje;