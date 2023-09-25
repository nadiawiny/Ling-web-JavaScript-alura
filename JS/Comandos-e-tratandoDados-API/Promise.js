// fetch() - é um método assícrono que tem como parametro obrigatorio a URL da API
// uma promise
var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
.then(resposta => resposta.json())
.then(r => console.log(r)) // .then() - tranformando em json pra nos retornar um json | ele pega a requisição e aquele valor ele faz algo com ele, mas só se ela for resilvida 

console.log(consultaCEP)

// anatomia da Promise
// const entrega = new Promises(function (resolve, reject){
//     if(recebeu == true){
// 	resolve('Ana recebeu a encomenta!')
//     }else {
// 	reject('Não foi possivel receber a encomenda!')
//     }
// })

// mostrando o erro na tela do usuário

var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json')
.then(resposta => resposta.json()) // quando é resilvida
.then(r => {
    if (r.erro){
        throw Error('Esse cep não existe!')
    }else 
        console.log(r)})
.catch(erro => console.log(erro)) // .catch() - tratando erros da promises

console.log(consultaCEP)

// finally - finalmente - idependente da resposta da promesa

var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
.then(resposta => resposta.json()) // quando é resilvida
.then(r => {
    if (r.erro){
        throw Error('Esse cep não existe!')
    }else 
        console.log(r)})
.catch(erro => console.log(erro)) // .catch() - tratando erros da promises
.finally(mensagem => console.log('Processamento concluído!'))

console.log(consultaCEP)