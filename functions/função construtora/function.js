//funçaõ construtora serve para criar um objeto e atribuir propriedades á ele
//também pode fazer com que ele exiba a realização de uma ação

//exemplo: cadastro de uma pessoa:


function Person(name){
    this.name = name
    this.walk = function() {
        return this.name  + ' está andando'
    }
    
    



    }




const bia = new Person('Bia')
const joao = new Person('João')

console.log(bia.walk())
console.log(joao.walk())