
/*
    for (let i = 100; i > 0; i--){
        if (i===50){
            break;
        }




        console.log(i)

    } */

    //COMANDO WHILE : ENQUANTO;
    //OUTRA ESTRUTURA DE REPETIÇÃO USADA QUANDO NÃO SE SABE QUANDO PARAR

  /*  let i = 4598765;

    while(i>10){ //irá se repetir enquando i for maior que dez, ou seja pra sempre
        console.log(i)


        i/=35 //irá parar enquanto o resultado do i divido por 35 for menor que 10

    }    */


    //FOR OF: CAPTURAR UM CARACTERE DE UMA STRING, OU UM ELEMENTO DE UM ARRAY

  /*  let name = 'bia' //string
    let names = ['joao', 'pedro','lucas'] //array

    for(let char of name){
        console.log(char)

    }

    for (let name of names){
        console.log(name)

    } */

    //FOR IN: PEGAR PROPRIEDADES DE UM OBJETO:

    let person ={ //criação de um objeto
        name : 'Bia',
        age : 20,
        peso : 37,
    }

    for(let propriedades in person){
        console.log(propriedades)
        console.log(person[propriedades]) //acessar por ordem de lista do objeto
       
    }
