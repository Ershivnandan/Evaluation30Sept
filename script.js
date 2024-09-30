const hamburger = document.getElementById("hamburger")
const MobilelistItems = document.querySelector(".MobilelistItems")
const closenav = document.querySelector(".closenav")

let isOpen = false
hamburger.addEventListener("click", ()=>{
    if(!isOpen){
        MobilelistItems.classList.add("openNav")
    }
    else{
        MobilelistItems.classList.remove("openNav")
    }
});
closenav.addEventListener("click", ()=>{
    if(isOpen){
        MobilelistItems.classList.add("openNav")
    }
    else{
        MobilelistItems.classList.remove("openNav")
    }
});