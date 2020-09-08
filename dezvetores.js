// Crie um vetor de 10 números e peça para o usuário qual
// número ele deseja verificar se existe no vetor. Caso exista,
// o programa deve mostrar todos os índices que ele se
// encontra.

let indices = [];
let vetor = [5,4,3,2,1,5,6,7,8,9]
let numero = Number(prompt(`Digite um valor de 0 a 10 e veja se ele é um dos números escolhidos`))
let verificar = vetor.indexOf(numero);

while (verificar != -1) {

  indices.push(verificar)
  verificar = vetor.indexOf(numero, verificar + 1)

}

if (indices != 0) {

    alert(`Os indices são: ${indices}`)

} else {
    
    alert(`Tente outro número`)
}















