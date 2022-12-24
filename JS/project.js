let savedTasks = localStorage.getItem('taskss');
let input = document.querySelector('#todo')
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please write something to do!!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>

        `;
        localStorage.setItem("taskss","todo");
        input.value = '';
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
           
        }
        localStorage.removeItem("taskss");
    }
    
}