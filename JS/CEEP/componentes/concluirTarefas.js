
// criar um componetente -> componenter é uma parte da minha aplicação 
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}
// evento de click - função
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target // target - quero saber qual o alvo do evento - em quem eu clickei

    const tarefaCompleta = botaoConclui.parentElement  // parentEmenet - vai pegar o pai do botão que eu cliquei - o paii (li)

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui
// export {
//     BotaoConclui,
//     concluirTarefa
// } 

// ouu export antes dos const 