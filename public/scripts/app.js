const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn=document.querySelector('.submenu-open-btn')
const navOpenBtn=document.querySelector('.nav-icon')
const navCloseBtn=document.querySelector('.nav-Close-Btn')
const nav=document.querySelector('.nav')
const overlay=document.querySelector('.overlay')
const navShopping=document.querySelector('.nav-shopping')
const navOpenShopping=document.querySelector('.navShoppin-icon')
const navShoppingCloseBtn=document.querySelector('.navShopping-Close-Btn')



const submenu=document.querySelector('.submenu')

toggleThemeBtn.forEach(btn=>{
btn.addEventListener("click",function () {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }   
})
})

submenuOpenBtn.addEventListener("click",(e)=>{
    e.currentTarget.parentElement.classList.toggle('text-orange-200');
   e. currentTarget.classList.toggle('rotate-180')
    
submenu.classList.toggle("submenu--open")
})


function closeNav() {
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.remove("overlay--visible")
}
function closeCart() {
    navShopping.classList.remove("left-0")
    navShopping.classList.add("-left-64")
    overlay.classList.remove("overlay--visible")
   
}

navOpenBtn.addEventListener('click',()=>{
nav.classList.remove("-right-64")
nav.classList.add("right-0")
overlay.classList.add("overlay--visible")
overlay.addEventListener('click',closeNav)
})

navOpenShopping.addEventListener('click',()=>{
navShopping.classList.remove("-left-64")
navShopping.classList.add("left-0")
overlay.classList.add("overlay--visible")
overlay.addEventListener('click',closeCart)
})


navCloseBtn.addEventListener('click',closeNav)
navShoppingCloseBtn.addEventListener('click',closeCart)    