const form = document.addItem
const list = document.getElementById("list")
const edits = document.querySelectorAll(".edit")
const dels = document.querySelectorAll(".delete")
const lists = document.querySelectorAll("#list")

// Modify function allows user to edit or delete
function mod(){
    if(event.srcElement.innerText == "X"){
        // Program work with a subtle glich with editing
        // possibly caused by referencing
        //console.log(event.srcElement.innerText)
        var val = event.path[1]
        val.remove()
    }
    console.log(event.path)
    if(event.srcElement.innerText == "edit"){
         var val = event.path[1]
        form.title.value = val.firstElementChild.innerText
        console.log(val.firstElementChild.innerText)
        val.remove()       
    }
}
list.addEventListener('click', mod)

// Add an item
form.addEventListener("submit", function(event){
    event.preventDefault()
    const item = form.title.value
    form.title.value = ""
    var newEle = document.createElement("li")
    var newDiv = document.createElement("div") 
    newDiv.textContent = item
    newEle.append(newDiv)
    newEle.innerHTML += '<button class="edit">edit</button>';
    newEle.innerHTML += '<button class="delete">X</button>'
    list.append(newEle)
})

