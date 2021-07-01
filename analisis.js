// Helpers
function calcularMediaAritmetica(lista) {  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
//es par
function esPar(num) {
    return (num % 2 === 0);
}


// calculadora mediana
function medianaSalary (lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana;

    }else{
        const personMitad = lista[mitad];
        return personMitad;
    }
}

//mediana General
const salariosCo = colombia.map(
    function (person){
        return person.salary;
    }
);

const salaryCoSort = salariosCo.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB
    }
);

const medianaGcol = medianaSalary(salaryCoSort);

//mediana top 10%
const spliceStart = (salaryCoSort.length * 90) / 100;
const spliceCount = salaryCoSort.length - spliceStart;
const salariosT10col = salaryCoSort.splice(
    spliceStart,
    spliceCount,
);

const medianaT10col = medianaSalary(salariosT10col);

console.log({
    medianaGcol,
    medianaT10col,
});
