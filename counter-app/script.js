const count = document.querySelector(".count");

// const add = document.querySelector(".add");

// const resetCount = document.querySelector(".reset");

// const sub = document.querySelector(".subtract");


const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }if (event.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }if (event.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
})

const setColor = () => {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    }if (count.innerHTML == 0) {
        count.style.color = "white";
    }if (count.innerHTML < 0) {
        count.style.color = "orangered";
    }
}




