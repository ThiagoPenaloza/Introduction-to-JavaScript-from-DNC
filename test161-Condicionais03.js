var selecao = 'Chile'

if (selecao == `Brasil`){
    console.log(`${selecao} já ganhou 5 vezes a copa`)
} else if (selecao == 'Uruguai') {
    console.log(`${selecao} já ganhou duas vezes a copa`)
} else if (selecao == 'Argentina') {
    console.log(`${selecao} já ganhou três vezes a copa`)
}
else {
    console.log(`${selecao} nunca ganhou uma copa do mundo`)
}



var idade = 18

if (idade > 17){
    console.log(`Com ${idade} anos você precisa Votar!`)
} else if (idade > 15 && idade <= 17) {
    console.log(`Com ${idade} você pode escolher Votar!`)
} else {
    console.log(`Com ${idade} você não pode Votar!`)
}