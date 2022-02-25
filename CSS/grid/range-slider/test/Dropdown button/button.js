let selected = document.querySelector(".selected");
let optionContainer = document.querySelector(".option-container");
const optionList = document.querySelectorAll(".option");

selected.addEventListener('click', () =>{
    optionContainer.classList.toggle("active")
})

optionList.forEach(el => {
    el.addEventListener("click", () =>{
        selected.innerHTML = el.querySelector('label').innerHTML;
        optionContainer.classList.remove("active");
    })
})