let inputBox = document.getElementById("input-box");
let ListContainer = document.getElementById("list-container");


function dataSave(){
    localStorage.setItem("data" , ListContainer.innerHTML);
}
function getData() {
    let data2 = localStorage.getItem("data");
    return;
    
}let data = getData()

function addTask(){
    if (inputBox.value === '') {
        console.log('empty');
        alert("It's Empty");
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild (span);
    }inputBox.value = "";
    dataSave()
    

}

ListContainer.addEventListener("click", function(e){
    if (e.target.tegName === "LI") {
        e.tag.classList.toggle("checked");
        dataSave()
      
    }else if (e.target.tegName === "SPAN") {
        e.target.parentElement.remove();
        dataSave()
       
    }
},  false);
 
