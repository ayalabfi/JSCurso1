// Quando há mais de 1 if, a condição é aninhada.
var idade = 14;
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log (`Não vota`)
} else if (idade < 18 || idade > 65){
    console.log (`O voto é opcional`)
    } else {
        console.log (`O voto é obrigatório`)
    }