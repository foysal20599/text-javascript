var len = document.querySelectorAll(".myButton").length
// console.log(len)

for(var i=0; i<len; i++){
    var myVar = document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML
        var paraID = document.querySelector("#paraID");
        paraID.innerHTML = "Button " + text + " audio " + " is play";
        audioPlay(text);
        animateionPlay(text);

    });
    
}

document.addEventListener("keypress", function(event){
    
    var keyPressValue =  event.key;
    console.log(keyPressValue)
    audioPlay(keyPressValue);
    animateionPlay(keyPressValue);
})

function audioPlay(text){
    switch(text){
        case "A":
            paraID.classList.add("button_class")
            var audio = new Audio('sounds/a.mp3')
            audio.play();
            setTimeout(function(){
                paraID.classList.remove("button_class")
            },1000);
            break;
        case "B":
            paraID.classList.add("button_class1")
            var audio = new Audio('sounds/b.mp3')
            audio.play();
            setTimeout(function(){
                paraID.classList.remove("button_class1")
            },1000);
            break;
        case "C":
            paraID.classList.add("button_class2")
            var audio = new Audio('sounds/c.mp3')
            audio.play();
            setTimeout(function(){
                paraID.classList.remove("button_class2")
            },1000);
            break;
    }
    
}

function animateionPlay(a){
    var buttonClass =document.querySelector("." + a)
    buttonClass.classList.add("animate");

    setTimeout(function(){
        buttonClass.classList.remove("animate");
    },1000);

}

var textArea = document.querySelector("textarea");
var count = 0;
var car =0;
textArea.addEventListener("keypress", function(event){
    count++
    
    var keyPressValue2 = event.key;
    var textID = document.querySelector("#textId");
    textID.innerHTML = "The keyboard value is: " + keyPressValue2 + "  =" + count;
});





// try{
//     alert("Hello Bangladesh")
//     alert(f)
//     alert("bye bye")
// }catch(error){
//    console.log(error) 
//    console.log(error.name) 
//    console.log(error.message) 
   
// }finally{
//     alert("I will meet next time")
// }