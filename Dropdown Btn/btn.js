let display = document.getElementById("display");
let ul = document.getElementById("dropList");
let list = document.querySelectorAll("#dropList > li");

display.addEventListener("click", () => {
  ul.classList.toggle("list-active");
});
// list.forEach((el)=>{
//     el.addEventListener('click', ()=>{
//         .classList.remove("option-active")
//         display.textContent = el.value;
//         el.classList.add("option-active")
//         ul.classList.remove("list-active")
//     })
// })

ul.addEventListener("click", (e) => {
  display.textContent = e.target.value;
  if(e.target.parentNode.querySelector(".option-active"))
  e.target.parentNode.querySelector(".option-active").classList.remove("option-active")
  e.target.classList.add("option-active");
  e.target.parentNode.classList.remove("list-active");
});
