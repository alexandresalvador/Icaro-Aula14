//exemplo1

const bank = {
    id: 001,
    name: 'Banco do Brasil S. A.'
}

bank.adress = {
    logradouro: 'Rua Antonio da Silva',
    number: '11',
    bairro: 'Vila Nova',
    cidade: 'Joinville',
    estado: 'SC',
}

let bancoNumeroENome = `ID: ${bank.id}, Nome:  ${bank.name}`

bancoNumeroENome

console.log(`notação com ponto: ${bank.name}`);

console.log(`notação com colchete: ${bank['name']}`);


bank.adress['cidade'];

//Exercicio-banda

//com ponto

const band = {
    id: 01,
    name: 'Red Hot Chilli Peppers',
    people: 04,
}

band.adress = {
    localizacao: 'Rua Jaguaruna',
    number: '10',
    bairro: 'Oklahoma',
    cidade: 'Seattle',
    estado: 'Texas',
}

let bandaNomeEPessoas = `Nome:  ${band.name}, Integrantes: ${band.people} `

bandaNomeEPessoas

let NomeLocalizacao = `A banda esta localizada na ${band.adress.localizacao},
   no bairro ${band.adress.bairro}, na cidade  ${band.adress.cidade} e no estado do ${band.adress.estado}. `

NomeLocalizacao

//////////////////////////////////////////////

//com colchetes

const band = {
    id: 01,
    name: 'Red Hot Chilli Peppers',
    people: 04,
}

band.adress = {
    localizacao: 'Rua Jaguaruna',
    number: '10',
    bairro: 'Oklahoma',
    cidade: 'Seattle',
    estado: 'Texas',
}

let bandaNomeEPessoas = `Nome:  ${band['name']}, Integrantes: ${band['people']}`

bandaNomeEPessoas

let NomeLocalizacao = `A banda esta localizada na ${band.adress.localizacao},
   no bairro ${band.adress.bairro}, na cidade  ${band.adress.cidade} e no estado do ${band.adress.estado}. `

NomeLocalizacao

//console.log(`notação com colchete: ${band['name']}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exemplo destructuring

let { nome, integrantes } = banda;
console.log(nome)
console.log(integrantes);

let { Localizacao: { cidade } } = banda;
console.log(cidade);

//exemplo-nome

function digaSeuNome(name) {
    if (name) {
        console.log(`Meu nome é ${name}`);
    } else {
        console.log(`O nome nao foi informado!`);
    }
}

digaSeuNome('misael');
digaSeuNome();

function digaSeuNome2(name2) {
    return name2 ? `${name2}` : `O nome nao foi informado!`;
}


//Exercicio-Par-ou-Impar

function isPar(numero) {
    if (numero % 2 === 0) {
        console.log(`O numero é par`);
    } else {
        console.log(`O numero é impar`);
    }
}

isPar(10);
isPar(11);

//ternario

function isParTernario(numero) {
    return numero % 2 === 0 ? `O numero é par` : `O numero é impar`;
}

isParTernario(12);
isParTernario(35);


// arrow function

const ParFlecha = numero => {
    return numero % 2 === 0 ? `O numero é par` : `O numero é impar`;
}

ParFlecha(44);

// mais arrow function

const calcularArea = (base, altura) => {
    return base * altura / 2;
}

calcularArea(10, 5);

function calcularArea2(base, altura) {
    return base * altura / 2;
}

calcularArea2(10, 6);

// funcao nomeada

function sayHello() { }

// funcao anonima

const digaSeuNome = function (name) {
    console.log(name);
}


digaSeuNome('Carlos');

//////////////////////////////////////////////////////////////////////////////////


//retorna o som dos animais

function tipoDeAnimal(animal) {
    if (animal === 'dog') {
        console.log(`auauauauauuu`);
    } else {
        console.log(`miaaaaau`);
    }
}

//agora retorna em arrow function o som dos animais:

// minha tentativa :

/*  const tipoDeAnimal = animal) { 
  => animal == 'dog' ? => console.log(`auauauauauuu`) : console.log(`miaaaaau`);
}  */

// resoluçao:

const setTypeAnimal = (animal) => {
    return animal === 'dog' ? console.log(`auauauauauuu`) : console.log(`miaaaaau`);
}

setTypeAnimal('dog');

