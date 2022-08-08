const reais = [29.76, 41.85, 46.5];

const soma = reais.reduce((total, quantidade) => total + quantidade);

console.log(soma)
//utilizando reduce para fazer as soma de todos os valores que tenho em reais 
//resultado: 118.11


let herois = [
    { nome: 'Superman', produtora: 'DC' },
    { nome: 'Batman', produtora: 'DC' },
    { nome: 'Hulk', produtora: 'Marvel' }
];

let heroisRank = herois.reduce(function (total, value, index, arr) {
    total.push(`${index + 1} de ${arr.length} - ${value.nome}`);
    return total;
}, []);

console.log(heroisRank);
// Resultado: ['1 de 3 - Superman', '2 de 3 - Batman', '3 de 3 - Hulk']
// desta vez usando o reduce para me informar a quantidade de filmes disponiveis 

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]

//reduce removendo os numeros repetidos