function calculadora(number1, operador, number2 ){
    let result = 0;


    switch (operador){
        case '+':
            result = number1 + number2
            break;

        case '-':
            result = number1-number2
            break;

        case '*':
            result= number1*number2
            break;

        case '/':
            result= number1/number2
            break;


        default :
            console.log('Não foi possível calcular')
            break

    }

        return result

}

console.log(calculadora(2,'+',3)) // para executar a calculadora