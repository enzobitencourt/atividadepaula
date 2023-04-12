// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

function areaRetangulo(altura, largura){
    console.log(altura * largura)
}

const altura = Number(prompt("Digite a altura:"))
const largura = Number(prompt("Digite a largura: "))

areaRetangulo(altura, largura)

// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

function descubraIdade(anon, anoa){
    idade = anoa - anon
    console.log(idade)
}

anon = Number(prompt("Digite seu ano de nascimento:"))
anoa = Number(prompt("Digite o ano atual:"))

descubraIdade(anon, anoa)

// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

function calculaIMC(peso, altura){
    imc = peso / (altura*altura)
    console.log(imc)
}

calculaIMC(70, 1.78)

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

function tamanhoString(str1, str2){
    if(str1.length === str2.length){
        resultado = true
        console.log(resultado)
    }
    else{
        resultado = false
        console.log(resultado)
    }
}

tamanhoString("verde", "amarelo")

// 5. Escreva uma função que recebe um array e retorna o último elemento.

function ultimoElemento(lista){
    console.log(lista[lista.length-1])
}

ultimoElemento([1, 2, 3, 4])

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function stringsIguais(str1, str2){
    if(str1.toLowerCase() === str2.toLowerCase()){
        const resultado1 = true
        console.log(resultado1)
    }
    else{
        const resultado1 = false
        console.log(resultado1)
    }
}

stringsIguais("verde", "Verde")


// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function idVencida(anon, anoa, anoid){
    idade = anoa - anon
    if(idade<=20){
        if((anoa - anoid)>5){
            resultado2 = true
        }
        else{
            resultado2 = false
        }
    }
    if(idade > 20 && idade <= 50){
        if((anoa - anoid) > 10){
            resultado2 = true
        }
        else{
            resultado2 = false
        }
    }
    if(idade>50){
        if((anoa - anoid)>15){
            resultado2 = true
        }
        else{
            resultado2 = false
        }
    }
    console.log(resultado2)
}

const anon1 = Number(prompt("Digite seu ano de nascimento: "))
const anoa1 = Number(prompt("Digite o ano atual: "))
const anoid = Number(prompt("Digite o ano da sua carteira de identidade: "))

idVencida(anon1, anoa1, anoid)
