// Define UI vars

const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector("#clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector('#task')


//Load all event listeners

loadEventListeners()

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask)

    //Remove task event

    taskList.addEventListener('click', removeTask)

    //clear task event
    clearBtn.addEventListener('click', clearTask)

    //filter task event
    filter.addEventListener('keyup', filterTask)

}
function filterTask(e) {
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent
        if(item.toLowerCase().indexOf(text) != -1 ) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}
function clearTask() {
    taskList.innerHTML = "";
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        //for confirmation
        if(confirm("Are you Sure?")) {
            e.target.parentElement.parentElement.remove()
        }
        
    }
    
}

function addTask(e) {
    if(taskInput.value === "") {
        alert("Add a task");
    }

    //create li item
    const li = document.createElement("li")
    li.className = 'collection-item';

    //Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value))

    //Craete new link element

    const link = document.createElement("a")
    link.className = 'delete-item secondary-content';
    link.style.marginLeft = "70%"
    link.style.color = "red"

    //Add icon html

    link.innerHTML = "x"
    //Append the lik to li
    li.appendChild(link)

    //Append the li to the ul

    taskList.appendChild(li)

    //Clear the input

    taskInput.value= ""

    e.preventDefault()
}

