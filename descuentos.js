// const PrecioOrigen = 120;
// const Descuento = 18;

function calcularPrecioConDescuento(Precio, Descuento) {
    const PorcentajePrecioDes = 100 - Descuento;
    const PrecioConDes = (Precio * PorcentajePrecioDes) / 100; 
    return PrecioConDes;
}

function BpriceDis(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);
    
    const inputDis = document.getElementById("InputDiscount");
    const DisValue = parseInt(inputDis.value);

    const PrecioConDes = calcularPrecioConDescuento(priceValue, DisValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + PrecioConDes;
}


// console.log({
//     PrecioOrigen,
//     Descuento,
//     PorcentajePrecioDes,
//     PrecioConDes
// });
