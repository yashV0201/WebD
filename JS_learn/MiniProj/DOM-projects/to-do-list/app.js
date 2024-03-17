const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    for(let i=0; i<todoList.length;i++){    //this method is used to generate HTML using javascript codes...awesome
        const todoObject = todoList[i];
        const name = todoObject.name;
        const date =todoObject.date;

        const html = 
                `<div>${name}</div>
                <div>${date}</div> 
                <button onclick="
                    todoList.splice(${i},1);
                    renderTodoList();
                " class = 'delete-button'>Delete</button>`
                ;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


    function addTodo(){
        const inputElement = document.querySelector('.js-name-input');
        const task = inputElement.value; 

        const dateInput = document.querySelector('.js-date-input');
        const date = dateInput.value;

        todoList.push({name:task, date:date});
        console.log(todoList);

        inputElement.value = ''

        renderTodoList();
    }

    

