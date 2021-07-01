function calcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

const listauno = [
    100,
    200,
    500,
    4000000,
];

const mitadlistauno = parseInt (listauno.length / 2);

function esPar(numero) {
    if(numero % 2 === 0){
        return true;
    }
    else {
    return false;
}

}
let mediana;

if (esPar(listauno.length)) {
    const elementU = listauno[mitadlistauno - 1];
    const elementD = listauno[mitadlistauno];
    const promedioEUD = calcularMediaAritmetica([
        elementU,
        elementD,
    ]);

    mediana = promedioEUD;

} else {
mediana = listauno[mitadlistauno]
}
