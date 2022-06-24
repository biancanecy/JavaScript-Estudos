
    function sayMyName(name='oie') {
        if (name === '' ){
            throw 'Nome é obrigatório'

        }

        console.log(name)


    }

    try{
            sayMyName()

    }catch(e){
        console.log(e)
    }

