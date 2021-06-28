const tast1 = () => {
    console.log("test1")  
}
const dataLoading = () =>{
    console.log("test2 Data is loading...")
}

const tast2 = () => {
    setTimeout(dataLoading, 1000)
}
const tast3 = () => {
    console.log("test3")  
}
const tast4 = () => {
    console.log("test4")  
}
const tast5 = () => {
    console.log("test5")  
}
const tast6 = () => {
    console.log("test6")  
}

tast1();
tast2();
tast3();
tast4();
tast5();
tast6();

