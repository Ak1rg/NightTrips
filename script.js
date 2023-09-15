function remove(el,ele,elem) {
    document.getElementById(el).classList.remove("active")
    document.getElementById(ele).classList.remove("active")
    document.getElementById(elem).classList.remove("active")
}
function burger(el,ele,elem,line,line2) {
    document.querySelector(el).addEventListener('click',() => {
        document.querySelector(ele).classList.toggle("active")
        document.querySelector(elem).classList.toggle("active")
        document.querySelector(line).classList.toggle("active")
        document.querySelector(line2).classList.toggle("active")
    })
}
function clickMenu (){
    document.querySelector(".burger-menu").classList.remove("active")
    document.querySelector(".burger_buttons").classList.remove("active")
    document.querySelector(".burger_lines").classList.remove("active")
    document.querySelector(".header_line").classList.remove("active")
    document.querySelector(".header_line2").classList.remove("active")
}
function slide (number,text,id,e,el,ele){
    document.querySelector("#number").innerHTML=(number)
    document.querySelector("#text").innerHTML=(text)
    document.getElementById(id).classList.toggle("active")
    remove(e,el,ele)
}

const button = document.getElementById("menu-button");

burger(".burger_lines",".burger_buttons",".burger_lines","","")
burger(".header__button",".burger_buttons",".burger-menu",".header_line",".header_line2")

document.body.addEventListener("click", function(event) {
    if (event.target !== button) clickMenu();
});

document.querySelectorAll("#button").forEach(item => {
    item.addEventListener('click', () => {
        clickMenu()
    })
})


document.getElementById("menu-button").addEventListener("click", () => {
    document.querySelector(".input").classList.remove("active")
});

document.querySelector(".search").addEventListener("click", () => {
    document.querySelector(".input").classList.toggle("active")
    clickMenu();
});

const input = document.querySelector(".input")
const img = document.querySelector(".search")

document.body.addEventListener("click", function(event) {
    if (event.target !== img && event.target !== input) input.classList.remove('active');
});

const swiper = new Swiper('.swiper', {
    loop: false,
    breakpoints:{
        1000:{
            allowTouchMove: false,
        }
    }
});

document.getElementById("chill").classList.toggle("active")

$("#chill").click(function(){
    swiper.slideTo(0);
    slide('01.','PLATEAU OF MOUNTAINS',"chill","spooky","desert","wild");
})
$("#spooky").click(function(){
    swiper.slideTo(1);
    slide('02.','MISTY FOREST LANDSCAPE',"spooky","chill","desert","wild");
})
$("#desert").click(function(){
    swiper.slideTo(2);
    slide('03.','GRAND DUNES LANDSCAPE',"desert","chill","spooky","wild");
})
$("#wild").click(function(){
    swiper.slideTo(3);
    slide('04.','JUNGLES OF BRAZIL',"wild","chill","spooky","desert");
})