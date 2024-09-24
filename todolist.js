
 let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    function todoListHtml(){
        
    let todoListHTML = '';

    todoList.forEach((todoListItem)=>{

       todoListHTML += `
               <div class="todo-item">
                   <div class="name"><p class="js-todo-list-name">${todoListItem.name}</p></div>
                   <div class="date"><p class="js-todo-list-date">${todoListItem.date}</p></div>
                   <div class="button"><button class="delete-btn js-delete-btn js-delete-btn">Delete</button></div>

               </div>
               `
            
   })

    document.querySelector('.js-output-container').innerHTML= todoListHTML;
     
    document.querySelectorAll('.js-delete-btn').forEach((deleteButton,index)=>{
            deleteButton.addEventListener('click' , ()=>{
                todoList.splice(index , 1)
                localStorage.setItem('todoList' , JSON.stringify(todoList));
                todoListHtml()
            })
        })
    }

    function todoListFunction(){
    const todoName = document.querySelector('.js-input-todo-list-name').value
    const todoDate = document.querySelector('.js-input-todo-list-date').value

    const todoListObject = {
        name: todoName,
        date: todoDate
    }
    if(todoName && todoDate){
        todoList.push(todoListObject);
    }

    localStorage.setItem('todoList' , JSON.stringify(todoList));

    todoListHtml()
    
    document.querySelector('.js-input-todo-list-name').value = '';
    document.querySelector('.js-input-todo-list-date').value = '';
    


}

todoListFunction();


document.querySelector('.js-add-todo-btn').addEventListener('click',()=>{

    todoListFunction();
})



document.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        todoListFunction();
    }
})

