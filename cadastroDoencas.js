// 2) Desenvolver um programa que peça ao usuário o
// número de doenças a cadastrar, no qual ele deve cadastrar
// o nome da doença e se ela é transmitida por vírus, bactéria
// ou por ambos. Ao final, mostrar quatro listas: doenças
// transmitidas por vírus, doenças transmitidas por bactérias,
// doenças transmitidas por ambos, lista com todas doenças.

let virus = [];
let bacteria = [];
let virusBacteria = [];
let cadastrarDoencas = Number(prompt(`Quantas doenças deseja cadastrar?`))

for(i = 1; i <= cadastrarDoencas; i++) {

    let tipo = prompt(`A doença é transmitida por vírus, bactéria ou ambos?`)
    let doenca = prompt(`Digite a doença do tipo ${tipo} que deseja cadastrar`)

    if (tipo == 'virus') {

        virus.push(doenca)
    
    } else if (tipo == 'bacteria') {
    
        bacteria.push(doenca)
    
    } else {
    
        virusBacteria.push(doenca)
    
    }

}

alert(`Foram cadastradas ${cadastrarDoencas} doenças.`)

    if (virus.length > 0) {

        alert(`As doenças cadastradas transmitida por virus são: ${virus}.`)

    } else {

        alert(`Não foi cadastrado nenhuma doença transmitida por virus`)
    }

    if (bacteria.length > 0) {

        alert(`As doenças cadastradas transmitida por bacterias são: ${bacteria}.`)

    } else {
        
        alert(`Não foi cadastrado nenhuma doença transmitida por bacteria`)
    }

    if (virusBacteria.length > 0) {

        alert(`As doenças cadastradas transmitida por ambos são: ${virusBacteria}.`)

    } else {

        alert(`Não foi cadastrado nenhuma doença transmitida por ambos`)
        
    }









