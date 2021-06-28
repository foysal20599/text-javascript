export let message = "Hello module";

export function setText(txt){
    message = txt; 
}

export const addFunction = (a, b) => {
    return `Result is: ${a + b}`;
}

