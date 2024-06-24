let num = [5, 8, 2, 9, 3]
/*
No código abaixo, o for funciona como na exemplificação normal, iremos inicializar o pos como 0, que é o valor do primeiro
elemento de um array, e assim, ao invés de declarar o índice do array pela numeração, declararemos pelo valor de pos, que seguirá
de forma linear devido a sempre que o for executar, ele adicionar + 1 ao pos, devido ao pos++
*/
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.sort()
/*
Essa é uma forma simplificada de digitar o código acima, o código abaixo
na leitura ao pé da letra, quer dizer, para cada position dentro de num
*/
for (let position in num) {
console.log(`A posição ${position} agora tem o valor ${num[position]}`)    
}