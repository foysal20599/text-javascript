// message = (a, b, ...z) =>{
//    console.log(`${a+b+z}`) 
// }
// message(10,20,25,23,26,50,40);

// addNumber = (a, b, ...c) =>{
//     console.log(`A = ${a} B = ${b} C = ${c}`)
// }

// // addNumber(1,20,30,50,40,40,33)


// let numbers1 = [1,2,3]
// let numbers2 = [4,6,9]
// let number = [...numbers1, ...numbers2]
// addNumber(...number)

// let p1 ={
//     name: "foysal",
//     lastName: "Ahmed"
// }
// let p2 = {
//     age:28,
//     village:"Dhulabari"
// }

// let p = {...p2, ...p1}
// console.log(p)




// // for of 

// let names = ["foysal", "ahmed", "stamford"]

// for(let a of names){
//     console.log(a)
// }


// // for in 

// let students ={
//     name: "Foysal Ahmed",
//     village: "dhullabari",
//     thana: "kachakata",
//     phone: "01776920544"
// }

// for(let a in students){
//     console.log(`${a}: ${students[a]}`)
// }

// for loop 
// var numbers = [10,20,30,40,50];
// for(var i=0; i<number.length; i++){
//     console.log(number[i])
// }

// numbers.forEach((x)=>{
// console.log(x)
// });
// console.log(numbers)
// var num = []

// numbers.forEach((x, b, c)=>{
//    num.push(c[b] = (x+5));
    
// });

// console.log(num)

 

// // map method 
// var numbers = [2,5,7,10,20,30,40,50]; 

// const newArray = numbers.filter((a)=>{
//     return a>10
// })
// console.log(newArray)



// // arrow function 
// const arrowFunction = () =>{
//     console.log("I am Foysal Ahmed");
// }
// arrowFunction()


// var students =[
//     {
//         name:"Foysal Ahmed",
//         village:"dhulabari",
//         thana:"kachkata",
//         gpa:2.27
//     },
//     {
//         name:"Raisha",
//         village:"dhulabari",
//         thana:"kachkata",
//         gpa:3.00
//     },
//     {
//         name:"Faruk hasan",
//         village:"dhulabari",
//         thana:"kachkata",
//         gpa:4.00
//     },
//     {
//         name:"ddd hasan",
//         village:"dhulabari",
//         thana:"kachkata",
//         gpa:5.00
//     }
// ]

// var teacher = [15,20,50,65,81,935];
// const [num1, num2] = teacher
// console.log(num1, num2)

// function nameFunction(){
//     return students.filter(function(a){
//          return a.gpa>= 3
//      }).map(function(b){
//          return b.name
//      })
//  }
//  console.log(nameFunction())


//  arrow function 

// const nameFunction = () => {
//    return students.filter((a)=>{
//         return a.gpa>=3
//     }).map((c)=>{
//         return c.name
//     });
// }

// console.log(nameFunction())
// const findNumber = (a) => {
//     if(a.gpa>3){
//         return a;
//     }
// }

// let numt = students.find(findNumber);
// console.log(numt)
// let numt1 = teacher.findIndex(findNumber)
// console.log(numt1)


let message = "today is sunday"
console.log(message.includes("is"))

