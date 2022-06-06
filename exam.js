class todo {
    constructor(){
        this.input = document.querySelector(".input");
        this.searchInput = document.querySelector(".search-input");
        this.zone = document.querySelector(".zone");
        this.tasks = [];
        //calling methods
        this.createTodo();
        this.searching();
    }
    createTodo(){
        this.input.addEventListener("keyup",(event)=>{

            if(this.input.value && event.keyCode==13){

                if(this.input.value.length > 40){
                    alert("Your Todo is long.");
                }
                else {
                this.tasks.push(this.input.value);

                let TodoDiv = document.createElement("div");
                TodoDiv.classList.add("todo-div");
                let TodoSpan = document.createElement("span");
                TodoSpan.classList.add("todo-span");
                TodoSpan.textContent = this.input.value;
                let TodoButton = document.createElement("button");
                TodoButton.classList.add("todo-button");
                TodoButton.textContent = "done";
                TodoDiv.appendChild(TodoSpan);
                TodoDiv.appendChild(TodoButton);
                this.zone.appendChild(TodoDiv);
                this.input.value= "";
               
                
                TodoButton.addEventListener("click",()=>{
                    // console.log(TodoButton);
                    // console.log(TodoDiv);
                    // console.log(TodoSpan.textContent);
                    console.log(this.tasks.indexOf(TodoSpan.textContent));
                    this.tasks.splice(this.tasks.indexOf(TodoSpan.textContent),1);
                    TodoDiv.remove();
                    // console.log(this.tasks);
                })
                }
            }  
        })
    }

    searching(){
        this.searchInput.addEventListener("input",()=>{
            this.clearTodoContent();
            if(this.tasks){
                this.tasks.forEach( item =>{
                   if(item.toLowerCase().trim().includes(this.searchInput.value.toLowerCase().trim())){
                    let TodoDiv = document.createElement("div");
                    TodoDiv.classList.add("todo-div");
                    let TodoSpan = document.createElement("span");
                    TodoSpan.classList.add("todo-span");
                    TodoSpan.textContent = item;
                    let TodoButton = document.createElement("button");
                    TodoButton.classList.add("todo-button");
                    TodoButton.textContent = "done";
                    TodoDiv.appendChild(TodoSpan);
                    TodoDiv.appendChild(TodoButton);
                    this.zone.appendChild(TodoDiv);
                    TodoButton.addEventListener("click",()=>{
                        this.tasks.splice(this.tasks.indexOf(TodoSpan.textContent),1)
                        TodoDiv.remove();
                        console.log(this.tasks);
                    })
                   }
                })
            }
        })


    }
    clearTodoContent(){
        this.zone.innerHTML = "";
    }
   
}
const todoObj = new todo();