/* CRIE UM ALGORITMO QUE TRANSFORME AS NOTAS DO SISTEMA NUMÉRICO PARA SISTEMA DE NOTAS EM CARACTERES TIPO A B C:

-DE 90 PRA CIMA : A
-ENTRE 80 E 89 : B
-ENTRE 70 E 79 : C
-ENTRE 60 E 69 : D
-MENOR QUE 60 : F

*/

 let nota = 90

    function getNota(nota){
let notaA = nota >=90 && nota <=100
let notaB = nota >=80 && nota <=89
let notaC = nota >=70 && nota <=79
let notaD = nota >=60 && nota <=69
let notaF = nota <=59 && nota >=0
let notaFinal; 


if(notaA) {
    notaFinal = 'A'   
}else if(notaB){
    notaFinal = 'B'
}else if(notaC){
    notaFinal = 'C'
}else if(notaD){
    notaFinal = 'D'
}else if(notaF){
    notaFinal = 'F'
}else{
    notaFinal = 'Nota Inválida'
}

   return notaFinal


 }

    //visualizar os valores em lista
    console.log(getNota(-1))
    console.log(getNota(5))
    console.log(getNota(-9))
    console.log(getNota(80))

























