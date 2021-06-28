import {message, setText, addFunction} from './module.js'
// console.log(message)

// setText("good byee");

// console.log(message)

// console.log(addFunction(2,5))

class Student{
    constructor(name, id, gpa){
        this.name = name;
        this.id = id;
        this.gpa = gpa;
    }
    
    get getNameStudent(){
        return this.name + " " + this.id + " " + this.gpa;
    }
    
}


let st = new Student("foysal", "20", "3.0");
// console.log(st.name)

// st.setNameStudent = "Hello Foysal";
// console.log(st.name)

console.log(st.getNameStudent)