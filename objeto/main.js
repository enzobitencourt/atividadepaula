
// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

const nomeMercado = {
    nome: "Enzo",
    compras: ["maçã", "arroz", "leite"]
}

function comprasConsole(nomeMercado){
    console.log(`Olá, ${nomeMercado.nome}. Hoje seus itens prioritários na lista de comprar são ${nomeMercado.compras[0]}, ${nomeMercado.compras[1]} e ${nomeMercado.compras[2]}`)
}

comprasConsole(nomeMercado)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novoMercado = {
    ...nomeMercado,
    compras: ["feijão", "suco", "batata-palha"]
}

comprasConsole(novoMercado)

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const personalCarac = {
    nome: "Enzo", 
    idade: 16,
    profissão: "estagiário"
}

const personalCarac2 = {
    nome: "Daniel", 
    idade: 47,
    profissão: "Engenheiro Civil"
}

//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

function retornoValores(objetoCarac){
    const listaEspecial = [objetoCarac.nome, objetoCarac.nome.length, objetoCarac.idade, objetoCarac.profissão, objetoCarac.profissão.length]
    console.log(listaEspecial)
}

retornoValores(personalCarac)
retornoValores(personalCarac2)

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
        const carrinho = []

//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
        const frutasSacolao = {
            nome: "Banana",
            disponibilidade: true
        }

        const frutasSacolao1 = {
            nome: "Maçã",
            disponibilidade: false
        }

        const frutasSacolao2 = {
            nome: "Uva",
            disponibilidade: true
        }

//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
//     - 💡  Dica
        
//       Aqui você deve usar o método **push()**

        function retornos(sacolao, sacolao1, sacolao2){
            carrinho.push(sacolao, sacolao1, sacolao2)
            console.log(carrinho)
        }

//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
        
        retornos(frutasSacolao, frutasSacolao1, frutasSacolao2)
        
// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function perguntaId(){
    const Nome = prompt("Digite seu nome:")
    const Idade = prompt("Digite sua idade:")
    const Profissão = prompt("Digite sua profissão:")

    const objetoId = {
        nome: Nome,
        idade: Idade,
        profissão: Profissão
    }

    console.log(`${objetoId}`)
}

perguntaId()