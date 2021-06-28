var len = document.querySelectorAll(".myButton").length

for(var i=0; i<len; i++){
    var myVar = document.querySelectorAll(".myButton")[i];
    myVar.addEventListener("click", function (){
        var text = this.innerHTML;
        // console.log(text)
        var varPara =  document.querySelector("#myperaID");
        varPara.innerHTML = "The " + text + " is clicked";
       if(text == "Button 1"){
        varPara.classList.add("button_class");  
       }else if(text == "Button 2"){
        varPara.classList.add("button_class1");
       }else{
        varPara.classList.add("button_class2");
       }
    });
    
}

  
