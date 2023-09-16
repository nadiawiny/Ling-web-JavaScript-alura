const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTafera)

    return botaoDeleta
}

const deletarTafera = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()

    return botaoDeleta
}
export default BotaoDeleta
// export {
//     BotaoDeleta,
//     deletarTafera
// }