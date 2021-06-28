var photos = ["slider/slider1.png", "slider/slider2.jpg", "slider/slider3.jpg"];
var imageTag = document.querySelector("img")
// console.log(imageTag)


count = 0;
function next(){
   count++
   if(count>=photos.length){
       count = 0;
       imageTag.src = photos[count];
   }else{
    imageTag.src = photos[count];
   } 
}

function prev(){
    count--
    if(count<0){
        count = photos.length - 1;
        imageTag.src = photos[count];
    }else{
     imageTag.src = photos[count];
    } 
}
