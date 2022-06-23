
    let temperatura = 37
    let febre = temperatura >= 37.5
    let febreMod = temperatura < 37.5 && temperatura >= 37



    if(febre) {
        console.log('Febre')
    } else if(febreMod) {
        console.log('Febre Moderada')
    } else { 
        console.log('Saudável')
    }
