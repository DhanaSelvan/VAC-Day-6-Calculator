let result = document.querySelector(".result");

// Function for do addition
const add = () => {
    let first = document.getElementById("first-num");
    let first_val = Number(first.value);
    let second = document.getElementById("second-num");
    let second_val = Number(second.value);
    if(first_val == " " || second_val == " "){
        alert("all fields are needed");
    }else{
        result.innerHTML = first_val + second_val;
    }    
    
}

// Function for do Subration
const sub = () => {
    let first = document.getElementById("first-num");
    let first_val = Number(first.value);
    let second = document.getElementById("second-num");
    let second_val = Number(second.value);
    if(first_val == " " || second_val == " "){
        alert("all fields are needed");
    }else{
        result.innerHTML = first_val - second_val;
    }  
}

// Function for do Subration
const mul = () => {
    let first = document.getElementById("first-num");
    let first_val = Number(first.value);
    let second = document.getElementById("second-num");
    let second_val = Number(second.value);
    if(first_val == " " || second_val == " "){
        alert("all fields are needed");
    }else{
        result.innerHTML = first_val * second_val;
    }  
}

// Function for do Division
const div = () => {
    let first = document.getElementById("first-num");
    let first_val = Number(first.value);
    let second = document.getElementById("second-num");
    let second_val = Number(second.value);
    if(first_val == " " || second_val == " "){
        alert("all fields are needed");
    }else{
        result.innerHTML = first_val / second_val;
    }  
}