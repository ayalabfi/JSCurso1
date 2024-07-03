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
