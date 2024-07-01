/* 
- while significa enquanto, ou seja, enquanto o teste lógico estiver dentro da métrica, o while vai se repetir até atingir o 
objetivo.
- Essa é a forma de digitar mais encontrada dentro dos programas
- É nomeada popularmente como estrutura de repetição com teste lógico no início
*/
var c = 1;
while (c <= 8){
    console.log(`Passo ${c}`)
    c++
}

/*
do singnifica faça, ou seja, ele faz a função e depois avalia o teste lógico, até que o objetivo seja atingido.
- É nomeada popularmente como estrutura de repetição com teste lógico no fim
*/
var c = 1;
do{
    console.log(`Função ${c}`)
    c++
} while (c <= 8)