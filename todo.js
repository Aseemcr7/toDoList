var taskspace=document.getElementById("taskspace")
var folder=document.getElementById("folder")
var single=document.getElementById("single")
var sub=document.getElementById("sub")
var singletask=document.getElementById("singletask")
var taskbox=document.getElementById("taskbox")
var del=document.getElementById("del")
function show(){
    if(taskbox.style.display === "none"){
        taskbox.style.display="inline-block"
    }else{
        taskbox.style.display="none"
    }
}
function hide(){
    del.remove()
    var li=document.createElement("li") 
    li.setAttribute("onclick","deltask(event)")
    li.textContent=singletask.value
    taskspace.append(li)
    if(taskbox.style.display ==="inline-block"){
        taskbox.style.display="none"
    }
    document.getElementById('singletask').value=" "      
}
function deltask(event){
    event.target.remove()
    
}
