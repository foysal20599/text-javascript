var getID = document.getElementById("changeStyle");

function addStyle(){
   getID.classList.add("my_class")
//    getID.style.fontSize = "30px"
//    getID.style.fontStyle = "italic"
//    getID.style.fontWeight = "bold"
}
function removeStyle(){
    getID.classList.add("my_class1");
}

function allStyleRemove() {
    getID.classList.remove("my_class1");
    getID.classList.remove("my_class");
}