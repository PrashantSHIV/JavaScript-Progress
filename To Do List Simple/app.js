// Access Container div
let container = document.querySelector(".container");

// Access addTask div
let task = document.querySelector(".addTask #add");

// Access taskBox div
let taskBox = document.querySelector(".taskBox");

// Access all tasks
document.querySelectorAll("#task").forEach((task) => {
    task.remove();
})

// Add event
container.addEventListener('click', (e) => {

// If targeT is Button
 if (e.target.tagName === 'BUTTON'){

    // create a new task
    let newTask = document.createElement("div");
    newTask.setAttribute('id','task');  // Adding attribute

    // create a h4 element
    let taskIs = document.createElement('h4');

    // create a button element
    let delBTn = document.createElement('span'); 
    delBTn.setAttribute('class','material-symbols-outlined');  // Adding attribute
    delBTn.innerText = "delete_forever";


    newTask.appendChild(taskIs); // Append h4 in textBox
    newTask.appendChild(delBTn); // Append button in textBox

    // If user value not empty then do
    if(task.value !== ""){
        taskIs.innerText = task.value;   // Add the task to h4
        taskBox.appendChild(newTask);  // then append the new-task in container
        task.value = "";
    }
    else alert("No Task Added");
 }
 
 console.log(e.target)
 if (e.target.tagName === 'SPAN'){
    e.target.parentNode.remove();
 }

 storeTask();
})

function storeTask(){
    localStorage.setItem('Tasks',taskBox.innerHTML);
    console.log(taskBox.innerHTML);
}

function getStoredTask(){
    const get = localStorage.getItem('Tasks');
    console.log(get)
    taskBox.innerHTML = get;
}

getStoredTask();
