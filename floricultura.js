// 3) Numa floricultura são vendidos os seguintes tipos de
// flores: rosa (R$12,60), begônia (R$8,50), dália (R$15,45),
// orquídea (R$22,30), tulipa (R$6,25), bromélia (R$7,90),
// girassol (R$9,20). Um cliente entra para comprar algumas
// flores, porém, tem apenas R$50 em dinheiro. Peça ao
// cliente quantas flores ele quer comprar e em seguida ele
// deve digitar os nomes das flores a comprar. Caso o valor
// não ultrapasse R$50, mostrar o valor a pagar (o vendedor
// só tem moedas de 1 real no momento, o valor deve ser
// arredondado para cima ou pra baixo caso passe ou fique
// abaixo de 50 centavos os decimais). Caso o valor
// ultrapasse R$50, ao final, mostrar uma mensagem
// avisando que não é possível comprar todas as flores.


let rosa = 12.60
let begonia = 8.50
let dalia = 15.45
let orquidia = 22.30
let tulipa = 6.25
let bromelia = 7.90
let girassol = 9.20
let tipo = Number(prompt("quantos tipos de flores deseja comprar?"))
let numero = tipo
let compra = 0

for (let i=1; i <= numero; i++) {

    let flor = prompt(`qual é a flor número ${i}?`)
    let quantidade = Number(prompt(`Quantas flores de ${flor} deseja comprar?`))

        if (flor === 'rosa') {

            compra += (rosa * quantidade)

        } 
         
        if (flor === 'begonia') {

            compra += (begonia * quantidade)

        } 
        
        if (flor === 'dalia') {

            compra += (dalia * quantidade)

        }

        if (flor === 'orquidia') {

            compra += (orquidia * quantidade)

        }

        if (flor === 'tulipa') {

            compra += (tulipa * quantidade)

        } 
        
        if (flor === 'bromelia') {

            compra += (bromelia * quantidade)

        } 
        
        if (flor === 'girassol') {

            compra += (girassol * quantidade)
        }
}

let valorFinal = Math.round(compra)

if (valorFinal > 50) {

    alert(`O valor da sua compra ultrapassou 50 reais.`)

} else {

    alert(`O valor total a pagar é de R$${valorFinal} reais e o troco é de R$${50 - valorFinal} reais em moedas de um real.`)

}
