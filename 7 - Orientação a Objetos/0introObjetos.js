/*
Após o fim do curso, oque estudar?
1 - Curso de HTML
2 - Curso de CSS
3 - Functions
* arrow functions
* callbacks
* funções anonimas
* iife
* javaScript funcional
3 - Objetos -> Curso de orientação a objetos
4 - modularização -> Deixar o código separado em arquivos e reutilizar códigos com JS
5 - RegEx -> Expressões regulares
6 - JSON -> estrutura de objetos onde você pode transmitir e salvar dados de forma local
7 - AJAX
8 - NodeJS
*/

/*
Introdução a objeto
A declaração de objeto, assemelha-se ao de uma array, no entanto, o indice é nomeado antes do valor da variável, conforme indicado
no exemplo abaixo, e a variáveis de um objeto, são declaradas dentro da tag colchetes {}, e não em chaves []
*/
let amigo = {nome:"José",
    sexo:"M",
    peso:85.4,
    engordar(p=0){
        this.peso += p
    }}

    amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
