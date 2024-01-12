let input = document.getElementById("inputField");
let listContainer = document.getElementsByClassName("listContainer")[0];
let button = document.getElementById("btn");
const task = ()=>
{
    let todo = input.value;
    if(todo==='')
    {
        alert("Empty Task");
        return;
    } 
    let task = document.createElement('li');
    task.innerHTML = todo;
    let cross = document.createElement('span');
    cross.innerHTML = "\u00d7";
    listContainer.append(task);
    task.appendChild(cross);
    input.value = "";
    saveData();
}
button.addEventListener("click",task);

listContainer.addEventListener('click',(e)=>
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
});

//TO SAVE TASKS PERMANENTLY IN THE BROWSER SO THAT IT WILL NOT VANISHES WHEN WE REFRESH
const saveData = ()=>
{
    //saving all the tasks in the local storage
    localStorage.setItem("data",listContainer.innerHTML);
}
//Load these saved tasks in the listcontainer when we open the browser again or refreshes
const showData = ()=>
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

