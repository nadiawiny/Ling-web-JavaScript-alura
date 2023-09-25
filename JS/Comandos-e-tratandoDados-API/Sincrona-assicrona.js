console.log('Mandando oi pro amigo!')

function mandandoMensagem(){
    console.log('tudo bem?')
    console.log('Vou te mandar uma solicitação!')
    console.log('solicitação recebida!')

}

setTimeout(mandandoMensagem, 5000) // ** Callback - são funções enviadas como parametros para outras funções  - como mandandoMensagem

console.log('tchau, tchau!')