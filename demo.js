// alert('Foysal')
// document.write('<h1>I am Foysal Ahmed</h1>')

// var number = "2.256"
// var num = toString(num)
// console.log(typeof(num))
// var int = parseInt(num)
// var flt = parseFloat(number)
// console.log(typeof(int))
// console.log(typeof(flt))
// console.log(flt.toFixed(3));
// var country = "Bangladesh";
// var country1 = " is a beautyfull Country";
// var country = country.length
// var country = country.toLocaleLowerCase()
// var country = country.toLowerCase()
// var country = country.toUpperCase()
// var country = country.concat(country1)

// var country = prompt("Please Enter Your Name: ")

// var country = document.write("Number of character foysal" + country.length)
// var country = "Bangladesh"
// var country = country.charAt(2);
// var country = country.slice(0, 3)
// document.write(country)

// var  num1 =  prompt("Enter your frist number: ");
// var num2 =  prompt("Enter your second number: ");
// console.log(typeof(num1))
// num1 = parseInt(num1);
// console.log(typeof(num1))
// num2 = parseInt(num2);

// var sum, sub;
// sum = num1 + num2;
// document.write("Addtion =" + sum + "<br/>");

// sub = num1 - num2;
// document.write("Subtraction =" + sub);
// document.write(num1 + " - " + num2 + " = " + sub);

// var base = parseFloat(prompt("Enter Base Number ="));
// var height = parseFloat(prompt("Enter Height Number ="));

// sum = (base * height)/2
//  document.write("Area = " + sum);

// var fahrenheit = parseFloat(prompt("Enter your fahrenhiet:"));

// var celcius = (fahrenheit - 32) * 5 / 9;
// document.write("Celcius = " + celcius + "<br/>")

// var cel = parseFloat(prompt("Enter Your Celcius:"));
// var fahren = (cel * 9/5) + 32
// document.write("Fahrenheit =" + fahren)

// even odd

// var number = parseFloat(prompt("Enter number: "));
// if(number%2==0){
//     document.write("Number is Even = " + number)
// }else{
//     document.write("Number is Odd = " + number)
// }

// condition check

// var number = parseFloat(prompt("Enter number: "));
// if(number>0){
//     document.write("The Number Is Positive")
// }else if(number<0){
//     document.write("The Number is Negative")
// }else{
//     document.write("The Number is Zerro")
// }

// result print Grate

// var number = parseFloat(prompt("Enter number: "));
// if(number>=80){
//     document.write("You Get A+")
// }else if(number>=70 && number<=79){
//     document.write("You Get A")
// }else if(number>=60 && number<=69){
//     document.write("You Get A-")
// }else if(number>=50 && number<=59){
//     document.write("You Get B")
// }else if(number>=40 && number<=49){
//     document.write("You Get C")
// }else if(number>=33 && number<=39){
//     document.write("You Tana Tani Passed")
// }else{
//     document.write("You Filed Your Final Examination")
// }

// max value
// var a = parseFloat(prompt("Enter number A: "));
// var b = parseFloat(prompt("Enter number B: "));
// var c = parseFloat(prompt("Enter number C: "));

// if(a>b && a>c){
//     document.write("A is big number" + a)
// }else if(b>a && b>c){
//     document.write("B is big number" + b)
// }else{
//     document.write("C is big number" + c)
// }

// Vowel or consonent

// var a = prompt("Enter number Letter: ");
// console.log(a)
// if(a != null){

// if(a==="a" || a==="A"){
//     document.write("Latter is Vowel =" + a)
// }else if(a==="e" || a==="E"){
//     document.write("Latter is Vowel =" + a)
// }else if(a==="i" || a==="I"){
//     document.write("Latter is Vowel =" + a)
// }else if(a==="o" || a==="O"){
//     document.write("Latter is Vowel =" + a)
// }else if(a==="u" || a==="U"){
//     document.write("Latter is Vowel =" + a)
// }else{
//     document.write("The letter is Consonent = "  + a)
// }
// }else{
//     document.write("No Input value")
// }

// loop
// var y="*"
// var x = 1
// // document.write( y + "<br/>")
// for(x; x<=99; x=x+2){
// document.write(x + "</br>")
// }

// var a = parseFloat(prompt("Enter number A: "));
// var b = parseFloat(prompt("Enter number B: "));
// console.log(a)

//     if(a%2==0){
//         for(a; a<=b; a=a+2){
//             document.write("Number is Even =" + a + "</br>")
//             }

//         if(a%2==0){
//             for(a; a>=b; a=a-2){
//                 document.write("Number is Even =" + a + "</br>")
//                 }
//     }else{
//         for(a; a>=b; a=a-2){
//             document.write("Number is Odd =" + a + "</br>")
//             }
//     }
// }else{
//     for(a; a<=b; a=a+2){
//         document.write("Number is Odd =" + a + "</br>")
//         }
// }

// if(a>b){
//     document.write("ook")
// }else{
//     document.write("no")
// }

// sum

// var a = parseFloat(prompt("Enter number A: "));
// var b = parseFloat(prompt("Enter number B: "));
// var sum=0;
// for(a; a<=b; a++){
//     sum =sum + a;

// }
// document.write(sum)

// retult 3, 5 diye vag korle 0 hobe

// var a = parseFloat(prompt("Enter number A: "));
// var b = parseFloat(prompt("Enter number B: "));

// var sum=0;
//     while(a<=b){
//         if(a%3==0 && a%5==0){
//             document.write("Value= " + a + "</br>")
//             sum =sum + a;
//         }
//         a = a+1;

//     }
//     document.write("Sum =" + sum)

// creating a function

// function squre(a) {
//   var sum = a * a;
//   document.write("Sum=" + sum);
// }
// squre(10);

// function return

// function squre(a) {
//     var sum = a * a;
//     return sum;
//   }
//  document.write(squre(10));

// addition fuction
// function addition(a, b) {
//     var sum = a + b;
//     return sum;
//   }

//   //suntraction
// function subtraction(a, b) {
//     var sub = a - b;
//     return sub;
//   }
//  document.write("Addition Value = " + addition(10, 20) + "</br>");
//  document.write("Addition Value = " + addition(2, 5) + "</br>");

//  document.write("Subtraction Value = " + subtraction(10, 5) + "</br>");
//  document.write("Subtraction Value = " + subtraction(30, 20) + "</br>");

//  Array

// var nam = new Array(5)
// // console.log(nam.length)
// nam[0] = "foysal";
// nam[1] = "ee";
// nam[2] = "fdgsd";
// nam[3] = "sfsd";
// nam[4] = "ahmed";
// console.log(nam[3]);

// var nam = ["foysal", "ahmed", "shati"];
// // console.log(nam[0])
// nam.push("kk")
// document.write(nam + "</br>")
// nam.pop()
// document.write(nam)
// // console.log(typeof(nam))

// console.log(nam.length)

// var a = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// for(var i=0; i<=5; i++){

//     sum = sum+a[i]
//     // document.write(a[i] + "</br>")

// }
// document.write(sum + "</br>")

// var names = ["Foysal", "Ahmed", "Shati", "ok"];
// var names1 = ["F", "med", "ati"];
//  names.push("Shati");
//  names.length
// names.pop();
// var ll = names.concat(names1);
// names.shift()
// names.unshift("ok")
// names.splice(2, 1, "Umme", "salma");
// names.splice(2, 2)
// var ok=names.toString();
// var slice = names.slice(2)
// var slice = names.sort()
// names.reverse()

// nember sort..........
//  var names = [100,20,15,13,60,35]
//  var sort = names.sort(function(a, b){
//      return a-b;
//  })

// console.log(sort);

// using constractor object

// function Student(a, b, c, d){
//         this.a =a;
//         this.b = b;
//         this.c = c;
//         this.d = d;

//         // this.display = function(){

//         //     // document.write(this.a)
//         //     // document.write(this.b)
//         //     // document.write(this.c)
//         //     // document.write(this.d)
//         //     console.log(this.a)
//         //     console.log(this.b)
//         //     console.log(this.c)
//         //     console.log(this.d)

//         // }
// }

// var student1 = new Student("Foysal Ahmed", 1, 5.00, ["01", "sdfds", "2215"]);
// var student2 = new Student("Sathi Ahmed", 2, 4.00, ["01", "sdfds", "2215"]);
// var student3 = new Student("Umme Salma", 3, 3.50, ["01", "sdfds", "2215"]);

// student1.display()
// student2.display()

// var wonNumber =0;
// var lostNumber = 0;



// gusing game 

// for (var i = 1; i <= 5; i++) {
//   var guseNumber = parseInt(prompt("Enter your guses number 1 to 5: "));
//   var randomNumber = Math.floor(Math.random() * 5) + 1;
//   // console.log(randomNumber)

//   if (guseNumber == randomNumber) {
//     console.log("you won!" +guseNumber +" /"+ randomNumber);
//     wonNumber++
//   } else {
//     console.log("you lost!" +guseNumber +" /"+ randomNumber);
//     lostNumber++
//   }
// }

// document.write("Total you have won: =" + wonNumber + "</br>")
// document.write("Total you have lost: =" + lostNumber)


// date method 

// var date = new Date();
// // var year = date.getFullYear()
// // var month = date.getMonth() +1
// var month = date.getUTCDay()
// console.log(month)




// Gusing game 
// var countWonNumber = 0;
// var countLostnumber = 0;


// for(var i=1; i<=5; i++){
// var gausing = parseInt(prompt("Enter Your Number: "));
// var ran = Math.floor((Math.random() *5) +1);
//     if(gausing == ran)
//     {
//         console.log('You have won!' + gausing + ' / ' + ran)
//         countWonNumber++;
//     }else{
//         console.log('you have lost' + gausing + ' / ' + ran)
//         countLostnumber++;
//     }
    
// }
// document.write('You have won! :'  + countWonNumber + "<br>")
// document.write('you have lost! :' + countLostnumber)


// function Student(a,b,c,d){
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;

//     this.display = function(){
//         document.write(this.a)
//         document.write(this.b)
//         document.write(this.c)
//         document.write(this.d)
//         // console.log(this.a)
//         // console.log(this.b)
//         // console.log(this.c)
//         // console.log(this.d)
//     }
// }
// document.write('ok')
// for(var i=1; i<=2; i++){
// var inputName = prompt("Enter Your Name: ")
// var inputRoll = parseInt(prompt("Enter Your Roll: "))
// var inputPhone = parseInt(prompt("Enter Your Phone: "))
// var inputClass = parseInt(prompt("Enter Your Class: "))

// var student1 = new Student("Name : " + inputName + "<br>",  "Roll: " + inputRoll + "<br>", "Phone :" + inputPhone + "<br>", "Class: " +inputClass + "<br>")

// student1.display();
  
// }


// var countA = 0;
// var countA1 = 0;
// // // var countA2 = 0;
// // // var countA3 = 0;
// // // var countA4 = 0;

// for(var i=1; i<=5; i++){
//     var cha =  prompt('Enter Your  Chector :')

//     if((cha == "a" || cha == "A") || (cha == "e" || cha == "E") || (cha == "i" || cha == "I") || (cha == "O" || cha == "O") || (cha == "u" || cha == "U")){
//         countA++
//     }else{
       
//         countA1++
//     }

//     // if(cha == "a" || cha == "A"){
           
//     //         countA++
//     // }else if(cha == "e" || cha == "E"){
//     //     countA1++
//     // }else if(cha == "i" || cha == "I"){
//     //     countA2++
//     // }else if(cha == "O" || cha == "O"){
//     //     countA3++
//     // }else if(cha == "u" || cha == "U"){
//     //     countA4++
//     // }
//     // else{
//     //     countA5++
//     // }
    
// // }
// // if("a" || "A"){
// //     document.write("Your Cractor is vowel =" + countA)
// }

// // document.write("Your Cractor is vowel =" + countA1)
// // document.write("Your Cractor is consonent " + countA5)

// document.write("Your Cractor is vowel =" + countA + "<br>")
// document.write("Your Cractor is consonent = " + countA1)






// var arr = [];                               // define our array

// for (var i = 1; i <= 5; i++) {              // loop 10 times
//   arr.push(prompt('Enter grade ' + (i+1))); // push the value into the array
// }

// document.write('Full array: ' + arr.toString());

// var arr = []
// for(var i=0; i<=4; i++){
// arr.push(prompt('Enter your element :' + (i+1)))

// }
// // console.log(arr)
// document.write("Full Array = " + arr.join("-"))



// var number = [];

// for(var i=1; i<=2; i++){
    
// number.push(parseInt(prompt("Enter number: ")))

// }
// // console.log(number)

// function myFunction(a, b) {
//   return a * b; 
// }      
// var numberType = myFunction(number[0], number[1])     
// console.log(numberType)



// var fahrenheit = parseFloat(prompt('Enter your Fahrenhit: '))

// function toCelcias(fahrenheit){
//  return (fahrenheit -32) * 5/9

// }
// //  toCelcias(fahrenheit)
// document.write(Math.floor(toCelcias(fahrenheit)))


// DOM 
// document.getElementById("helloP");
// myheading.innerHTML = "ok"
// document.getElementsByTagName("h1")[0].innerHTML = "hello world"
// document.getElementsByTagName("h1")[1].innerHTML = "hello Bangladesh"
// document.getElementsByClassName("ok")[0].innerHTML = "hello Foysal Ahmed"

// document.querySelectorAll("ul li")[2].innerHTML = "ok"
// document.querySelector("#hhh")
// document.querySelectorAll('h1')[0].innerHTML ="Hello"

// document.getElementById("helloP").style.color = "red";
// document.getElementsByTagName("h1")[1].style.color = "blue";
// document.getElementsByClassName("ok")[0].style.color = "red";
// document.querySelector(".title h1").style.color = "blue"



// var myImage = document.querySelector("#image");
// function foysalImage(){
//  myImage.src = "image/foysal.jpeg";
// }
// function shatiImage(){
//     myImage.src = "image/shati.png";
// }

// var heading = document.createElement("h1");
// var text = document.createTextNode("Add Second element");
// heading.appendChild(text)

// var getId = document.getElementById("divID");
// getId.appendChild(heading)


// var heading2 = document.getElementsByTagName("h1")[0]
// // console.log(heading2)
// getId.removeChild(heading2);



// var heading4 = document.createElement("h1");
// var text4 = document.createTextNode("I have added new text");
// heading4.appendChild(text4);

// var getIdff = document.getElementById("divID");
// var heading5 = document.getElementsByTagName("h1")[1]
// getIdff.insertBefore(heading4, heading5)
