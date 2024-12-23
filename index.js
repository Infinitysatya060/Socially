let icon = document.querySelector(".icon");
let icon2 = document.querySelector(".icon2");
let list = document.querySelector(".list");


icon.addEventListener("click", ()=>{
   list.classList.add('active');
  icon.classList.add('disable');
  icon2.classList.remove('disable');
})

icon2.addEventListener("click", ()=>{
    list.classList.remove('active');
    icon.classList.remove('disable');
    icon2.classList.add('disable');
})