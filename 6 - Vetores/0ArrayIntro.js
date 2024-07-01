/* !Variáveis
- Variáveis simples armazenam apenas um valor por vez
- Variáveis compostas armazenam mais de um valor por vez na mesma estrutura (Serve para ter um código mais limpo)
- array, ou vetor, é a variável declarada
- a array é composta de elementos
- o elemento é um par que agrupa espaço da memória, o valor colocado dentro dele e o índice
- índice, ou chave, é o código da variável, em linguagem de programação, a contagem começa em 0, e não em 1
- Oque é gravado dentro do elemento, é o conteúdo, ou valor
Frase importante:
Um array, ou vetor, ou variável composta, é uma variável que tem vários elementos, cada elemento é composto por seu valor e por
uma chave de identificação.
*/

/*
Explicação do código abaixo:
let -> Método para declarar a variável, reexplicado na aula 06 ex 002.html
num -> Nome da variável
[] -> Indica que é uma variável composta, onde cada , indica que haverá um novo elemento
 */
let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

/* Na declaração abaixo, foi feito a alteração do valor indicado no indice de código 3, que seria o 4º número da lista
Lembre-se que na programação, a contagem se inicia em 0, e não em um, por isso foi no 4º número, e não no 3º
*/
num [3] = 6

console.log(`Nosso atualizado é o ${num}`)

// Na declaração abaixo, foi adicionado um novo número a fila, sem mexer nos já existentes
num.push(7)

console.log(`Nosso atualizado agora é o ${num}`)

//num.length mostra o tamanho da variável, ou seja, quantos indices ela possui
console.log(`O vetor tem ${num.length} posições`)

// name[number] mostra o valor posicionado em determinado indice, no caso abaixo, no indice 5 (6º elemento)
console.log(`O 6º elemento no vetor é o ${num[5]}`)

// name.sort() apresenta o vetor em ordem crescente, conforme declarado abaixo, os indices são ajustados de acordo com a ordenação!
console.log(`Os valores do vetor em ordem são: ${num.sort()}`)

/* name.indexOf(value) busca o valor determinado dentro do vetor,
se não tiver, ele retorna -1, devido a não se encontrar no indice
se tiver, ele retorna qual o indice do elemento a qual o valor pertence
*/
console.log (num.indexOf(7)) 