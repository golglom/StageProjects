const inputBox = document.getElementById("input-box")
const listBox = document.getElementById("list-container")

function addTask() {

    if (inputBox.value == "") {
        listBox.innerHTML = "";
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBox.value = "";
    sauvegarde();
    
}

listBox.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("accept")
        sauvegarde();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        sauvegarde();
    }
},false)



function sauvegarde() {
    localStorage.setItem("data",listBox.innerHTML);
}

function récupération(){
    listBox.innerHTML = localStorage.getItem("data");
}
récupération();

