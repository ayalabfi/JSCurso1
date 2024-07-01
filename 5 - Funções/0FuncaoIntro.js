/*
! Funções:
- São ações executadas assim que são chamadas ou em decorrência de algum evento
- Uma função pode receber parâmetros e retornar um resultado
- Uma função em JS só pode ter 1 retorno
*/
/* 
! Desmembrando o código abaixo
- function: cria a função nomeada a frente
- nome(value): É a primeira chamda formal, geralmente o value é indicado fora da function, no caso, parimpar é o nome da função e n
é o valor formal, declarado mais a frente
- if e else: já foram explicados anteriormente
- return: retornará o resultado a frente de acordo com a condição
** Após o fechamento da function **
- nomeDaFunction(valor): Aqui você declarará o valor da variável, e essa será atribuída dentro da function
obs.: Se você não atribuir o valor da function a uma variável, não será possível apresentar o valor, por isso foi criado a
variável res

*/
function parimpar(n) {
    if (n%2 == 0) {
        return "par"
    } else {
        return "impar"
    }
} 
let res = parimpar(3)
console.log(res)