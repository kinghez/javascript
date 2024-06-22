let entry = document.getElementById("textBox");
const celToFah = document.getElementById("celsiusToFah");
const fahToCel = document.getElementById("fahTocelsius");
let textP = document.getElementById("text");
const btn = document.getElementById("btn");
let temp;

function converter(){
    if (celToFah.checked){
        temp = Number(entry.value);
        temp = temp*9/5+32;
        textP.textContent = temp+"^F";
    }

    else if(fahToCel.checked){
        temp = Number(entry.value);
        temp = (temp-32) * (5/9);
        textP.textContent = temp+"^C";
    }

    else{
        textP.textContent = "Please Select a unit";
    }

}

btn.onclick = converter;