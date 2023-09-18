
import BotaoConclui from './componentes/concluirTarefas.js'
import BotaoDeleta from './componentes/deletaTarefas.js'

const criarTarefa = (evento) => {

    evento.preventDefault() // previnir o comportamneto padrão

    const lista = document.querySelector('[ data-list]') 
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li') // cria elemento do DOM
    tarefa.classList.add('task') // colocar o  class
    const conteudo = `<p class="content">${valor}</p>` // “Template String” ele vai interpolar codigo html com js | expressão js se usa ${}

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)  // anexa elemento um dentro do outro 

    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)