const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    for(let i=0; i<todoList.length;i++){    //this method is used to generate HTML using javascript codes...awesome
        const todoObject = todoList[i];
        const name = todoObject.name;
        const date =todoObject.date;

        const html = 
                `<div class="bg-yellow-100 p-5 rounded h-[200px] w-[200px] drop-shadow-lg">
                <div class="flex justify-between text-gray-500">
                <div class = "text-[0.9rem]"><i>${date}</i></div>
                <button onclick="
                    todoList.splice(${i},1);
                    renderTodoList();
                " class = 'delete-button hover:text-red-400'><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="text-gray-500">${name}</div>
                </div>`
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

    

