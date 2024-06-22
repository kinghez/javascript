const textA = document.getElementById("word");

const bt = document.getElementById("btn");

let count = document.getElementById("count");

let remain = document.getElementById("remain")


textA.addEventListener("keydown", () =>{
    count.innerHTML = textA.value.length;
    remain.innerHTML = 1000 - textA.value.length;

})

