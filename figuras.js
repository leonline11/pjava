// codigo cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadro miden: "+ ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del Cuadrado es: " + perimetroCuadrado+ " cm");

 function areaCuadrado(lado){
     return lado * lado;
 }


// console.log("El area del Cuadrado es: " + areaCuadrado+ " cm^2");
console.groupEnd();

//codigo triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Codigo del Circulo
console.group("Circulos");
// const radio = 4;

function diametroCirculo(radio) {
    return radio * 2;
}

const Pi = Math.PI;

function perimetroCirculo(radio) {
   const Diametro = diametroCirculo(radio);
   return Diametro * Pi;
}

//area
function areaCirculo (radio){
    return (radio * radio) * Pi;
}
console.groupEnd();

//info con HTML
// CUADRADO
function calcularPerimetroCu(){
    const inputc = document.getElementById("InputCuadrado");
    const valuec = inputc.value; 

    const perimetro1 = perimetroCuadrado(valuec);
    alert(perimetro1);
}

function calcularAreaCu(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area);
}


// TRIANGULO
function calcularPerimetroTri(){
    const input_t1 = document.getElementById("InputLado1");
    const value_t1 = parseInt(input_t1.value);
    const input_t2 = document.getElementById("InputLado2");
    const value_t2 = parseInt(input_t2.value);
    const base = document.getElementById("InputBase");
    const valueb = parseInt(base.value); 

    const perimetro = perimetroTriangulo(value_t1,  value_t2, valueb);
    alert(perimetro);
}

function calcularAreaTri(){
    const input_BT = document.getElementById("baseT"); 
    const value_BT = parseInt(input_BT.value); 
    const input_AT = document.getElementById("alturaT"); 
    const value_AT = parseInt(input_AT.value); 

    const areaT = areaTriangulo(value_BT, value_AT);
    alert(areaT);
}