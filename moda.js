const listaU = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    1,
];

const listaUCount = {};

listaU.map(
    function (elemento) {
        if(listaUCount[elemento]) {
            listaUCount[elemento] += 1;    
        } else{
        listaUCount[elemento] = 1;
        }
    }
);

const ListArray = Object.entries(listaUCount).sort(
    function (valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }

);

const moda = ListArray[ListArray.length - 1];
