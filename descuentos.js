// const PrecioOrigen = 120;
// const Descuento = 18;

function calcularPrecioConDescuento(Precio, Descuento) {
    const PorcentajePrecioDes = 100 - Descuento;
    const PrecioConDes = (Precio * PorcentajePrecioDes) / 100;   
}

function BpriceDis(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDis = document.getElementById("InputDiscount");
    const DisValue = inputDis.value;

    const PrecioConDes = calcularPrecioConDescuento(priceValue, DisValue);
    alert(PrecioConDes);
}


// console.log({
//     PrecioOrigen,
//     Descuento,
//     PorcentajePrecioDes,
//     PrecioConDes
// });
