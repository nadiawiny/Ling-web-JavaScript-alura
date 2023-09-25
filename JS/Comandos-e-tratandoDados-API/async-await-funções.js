// outra maneira de fazer programação asicrona -> Async Await 

async function buscaEndereco(){
    var consultaCEP = await fetch('https:viacep.com.br/ws/01001000/json')
    var consultaCEPConvertida = await consultaCEP.json()
    console.log(consultaCEPConvertida)
}

// buscaEndereco()

// tratamento de erro - try{} | catch

async function buscaEndereco(){
    try{
        var consultaCEP = await fetch('https:viacep.com.br/ws/01001250/json')
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!') // forçando o erro
        }
        console.log(consultaCEPConvertida)
    }catch(erro){
        console.log(erro)
    }
} 

buscaEndereco()

// Promise.all - ela nos ajudou a fazer varias requisições ao mesmo tempo

async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https:viacep.com.br/ws/${cep}/json`)
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!') // forçando o erro
        }
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    }catch(erro){
        console.log(erro)
    }
} 
let ceps = ['01001000', '01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))