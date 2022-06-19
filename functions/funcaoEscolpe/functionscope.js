
/* let subject = 'create video' //escolpo global



function createThink(subject) {//escolpo local de function
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject) */


/* sayMyName() //sofre hoisting

function sayMyName(){
    console.log('bianca')

}

*/


//callback function:

function sayMyName(name){
    console.log('antes da função callback')



    name()

    console.log('depois de executar')
}

    sayMyName(
    
        () => {
            console.log('callback')

        }

    )

