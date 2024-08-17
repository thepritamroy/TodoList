
 let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
        name: 'wash dishes',
        date: '12-08-2024'
    },
    {
        name: 'Watch youtube',
        date: '13-08-2024'
    }];

    function todoListHtml(){
        
    let todoListHTML = '';

    todoList.forEach((todoListItem)=>{

       todoListHTML += `
               <div class="todo-item">
                   <span class="js-todo-list-name">${todoListItem.name}</span>
                   <span class="js-todo-list-date">${todoListItem.date}</span>
                   <button class="delete-btn js-delete-btn js-delete-btn">Delete</button>

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





