

/* CRIE UM OBJETO QUE POSSUIRÁ DUAS PROPRIEDADES, AMBAS DO TIPO ARRAY:

*RECEITAS: []
*DESPESAS: []

AGORA CRIE UMA FUNÇÃO QUE IRÁ CALCULAR O TOTAL DE RECEITAS E DESPESAS

E IRÁ MOSTRAR UMA MENSAGEM SE A FAMÍLIA ESTA COM SALDO POSITIVO OU NEGATIVO, SEGUIDO DO VALOR DO SALDO:

*/

    
    let familiar = {
        receitas: [3500, 300, 400, 500.78],
        despesas: [120, 170, 400, 100, 700, 600]
    } 

    function soma(array){
        let total = 0;

        for(let value of array){
            total += value


        }


        return total


    }

    function calcularBalanco(){
        const calculateReceitas = soma(familiar.receitas)
        const calculateDespesas = soma(familiar.despesas)
        const total = calculateReceitas - calculateDespesas

        const itsOk = total >= 0
        let balanceText = 'Negativo'

        if(itsOk){
            balanceText = 'Positivo'

        }


        console.log(`Seu saldo é ${balanceText} : ${total.toFixed(2)}`)




    }

    calcularBalanco()



