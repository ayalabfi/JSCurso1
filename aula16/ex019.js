/*
- É possível declarar mais de um valor a variável da function
- Se você não declarar algum dos valores, será definido como undefined, para que isso não ocorra, declare um valor base conforme
feito abaixo
*/
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))