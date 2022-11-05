const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");

const todoList = document.getElementById("todo-list");

let saveTodo = [];



function saveData(){
    
    if(saveTodo.length > 5){
        return true;
    }
    localStorage.setItem("todoList" , JSON.stringify(saveTodo) );

}

function deleteTodo(event){
    const li = event.target.parentNode;
    li.remove();
    saveTodo = saveTodo.filter((todo) => todo.id !== parseInt(li.id));
    saveData();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");

        li.appendChild(span);
        li.id = newTodo.id;
        span.innerText = newTodo.text;
        todoList.appendChild(li);
    
        const button = document.createElement("button");
        li.appendChild(button);
        //button.innerText = "X";
        button.className = "btn-close";
        button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = ""; //newToDo가 비워지는 것은 아니라는 것 명심!!
    const newTodoObj = {
        text : newToDo,
        id : Date.now()
    }
    paintToDo(newTodoObj);
    saveTodo.push(newTodoObj);
    saveData();
}


function sayHello(item){
    console.log("hello " + item);
    
}


const savedToDos = localStorage.getItem("todoList");

if(savedToDos){
    const parseTodos = JSON.parse(savedToDos);
    saveTodo = parseTodos;
    parseTodos.forEach((item) => paintToDo(item));
}



todoForm.addEventListener("submit", handleToDoSubmit);