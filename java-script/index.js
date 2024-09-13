var menu = document.querySelector('.menubtn') ; 
var menuCon = document.querySelector('.menu-dad') ;
var element = document.body ;
var closeMenu = document.querySelector('.right-menu')

menu.addEventListener('click' , function(){
    menuCon.classList.add('show') ;
}) ;

closeMenu.addEventListener('click' , function(){
    menuCon.classList.remove('show')
})

let gotoup = document.getElementById("gotoup");

window.addEventListener('scroll' , function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        gotoup.classList.add('active')
    }else{
        gotoup.classList.remove('active')
    }
})

let next = document.querySelector('.next') ;
let back = document.querySelector('.back') ;
let items = document.querySelectorAll('.item')

let times = items.length 
let count = 1 ;

next.addEventListener('click' , function(){
    if(count >= times){
        items[0].style.marginLeft = 0 ;
        count=1 ;
    } else {
        items[0].style.marginLeft = `-${items[0].offsetWidth * count}px` ;
        count++ ;

    }
})

back.addEventListener('click' , function(){
    if(count===1){
        items[0].style.marginLeft = `-${items[0].offsetWidth * (times-1)}px` ;
        count = times;
    } else {
        items[0].style.marginLeft = `-${items[0].offsetWidth * (count-1) - items[0].offsetWidth}px` ;
        count-- ;
    }
})