const menubtn = document.querySelector(".hamburger");
const closebtn = document.querySelector(".close_hamburger");
const navcontainer = document.querySelector(".navcontainer");
const readmore1btn = document.querySelector(".readmore1");
const readmore2btn = document.querySelector(".readmore2");
const batch1card = document.querySelector(".batch1");
const batch2card = document.querySelector(".batch2");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const tgmenuli = document.querySelectorAll(".tgmenuli");


tgmenuli.forEach(function (li) {
    const atr = li.getAttribute("href");
    const id = li.getAttribute("href");
    li.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        navcontainer.classList.toggle("h-[325px]");
        navcontainer.classList.toggle("h-20");
        closebtn.classList.toggle("hidden");
        menubtn.classList.toggle("hidden");
    })
})

menubtn.addEventListener("click", () => {
    navcontainer.classList.toggle("h-[325px]");
    navcontainer.classList.toggle("h-20");
    closebtn.classList.toggle("hidden");
    menubtn.classList.toggle("hidden");


})

closebtn.addEventListener("click", () => {
    navcontainer.classList.toggle("h-[325px]");
    navcontainer.classList.toggle("h-20");
    closebtn.classList.toggle("hidden");
    menubtn.classList.toggle("hidden");

})

readmore1btn.addEventListener("click", () => {
    readmore1btn.classList.toggle("hidden");
    para1.classList.toggle("h-72");
    para1.classList.toggle("h-0");


})
readmore2btn.addEventListener("click", () => {
    readmore2btn.classList.toggle("hidden");
    para2.classList.toggle("h-68");
    para2.classList.toggle("h-0");


})
