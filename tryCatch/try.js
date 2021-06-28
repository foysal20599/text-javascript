// try{
//         alert("Hello Bangladesh")
//         alert(f)
//         alert("bye bye")
//     }catch(error){
//        console.log(error) 
//        console.log(error.name) 
//        console.log(error.message) 
       
//     }finally{
//         alert("I will meet next time")
//     }

document.querySelector("#clickID").addEventListener("click", function(){
   var preID = document.querySelector("#preID");
    var num = document.querySelector("#inputID").value
    if(num>5 && num<10){
         preID.innerHTML ="Input number is perpect";
        
    }
    try{
        if(num<5){
            throw "Input number is low";
        }else if(num>10){
            throw "Input number is heigh"
        }
    }catch(err){
        console.log(err)
    }
});


