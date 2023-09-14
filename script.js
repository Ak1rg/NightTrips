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
burger(".burger_lines",".burger_buttons",".burger_lines","","")
burger(".header__button",".burger_buttons",".burger-menu",".header_line",".header_line2")

document.querySelectorAll("#button").forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector(".burger-menu").classList.remove("active")
        document.querySelector(".burger_buttons").classList.remove("active")
        document.querySelector(".burger_lines").classList.remove("active")
        document.querySelector(".header_line").classList.remove("active")
        document.querySelector(".header_line2").classList.remove("active")
    })
})


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
    document.querySelector("#number").innerHTML=('01.')
    document.querySelector("#text").innerHTML=('PLATEAU OF MOUNTAINS')
    document.getElementById("chill").classList.toggle("active")
    remove("spooky","desert","wild")
})
$("#spooky").click(function(){
    swiper.slideTo(1);
    document.querySelector("#number").innerHTML=('02.')
    document.querySelector("#text").innerHTML=('MISTY FOREST LANDSCAPE')
    document.getElementById("spooky").classList.toggle("active")
    remove("chill","desert","wild")
})
$("#desert").click(function(){
    swiper.slideTo(2);
    document.querySelector("#number").innerHTML=('03.')
    document.querySelector("#text").innerHTML=('GRAND DUNES LANDSCAPE')
    document.getElementById("desert").classList.toggle("active")
    remove("chill","spooky","wild")
})
$("#wild").click(function(){
    swiper.slideTo(3);
    document.querySelector("#number").innerHTML=('04.')
    document.querySelector("#text").innerHTML=('JUNGLES OF BRAZIL')
    document.getElementById("wild").classList.toggle("active")
    remove("chill","spooky","desert")
})