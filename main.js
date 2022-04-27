// Selectors

const todoInput = document.querySelector('.todo-input') // Selecionou o texto Input.
const todoButton = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo) // Aqui foi adicionado um evento 'clicar' e adicionar na todo.
todoList.addEventListener('click', deleteCheck)

// Functions

function addTodo(event) { //Ao clicar no button, criamos o event de add no Todo.
    // Isso faz o site para de salvar.
    event.preventDefault() 
    // Todo DIV: Crindo um elemento div no HTML e adicionando a Todo no site.
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value // Ao digitar qualquer coisa no input, aparecerá na Todo.
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // CHECK MARK BTN, botão de feito.
    const completedBtn = document.createElement('button')
    completedBtn.innerHTML = '<i class="fas fa-check"></i>">' //Colocamos um icone HTML com js
    completedBtn.classList.add("complete-btn")
    todoDiv.appendChild(completedBtn)
    // CHECK TRash BTN, botão de excluir.
    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>">' //Colocamos um icone HTML com js
    trashBtn.classList.add("trash-btn")
    todoDiv.appendChild(trashBtn)
    // APPEND TO LIST
    todoList.appendChild(todoDiv)
    // LIMPAR TODO do INPUT VALUE
    todoInput.value = ''
}
    
function deleteCheck(e) {
    const item = e.target
    // DELETAR A TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }

    // CHECK A TODO
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}


//Dica: para copiar e colar o codigo acima utilize: shift+Ctrl+seta para baixo.