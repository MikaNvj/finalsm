var barmenu = document.getElementById('menu');
barmenu.addEventListener('click',function(){
    var bar = document.getElementById('navbarphone');
    bar.classList.toggle('block')
});

function removenone(){
    var bar = document.getElementById('navbarphone');
    bar.classList.toggle('block')
}
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove',e =>{
    cursor.setAttribute('style','top:'+(e.pageY)+'px; left:'+(e.pageX)+'px;')
 });



 const elementNext = document.getElementsByClassName("next");
const elementPrev = document.getElementsByClassName("prev");
const slideClass = ["ContentImage", "ContentImage2", "ContentImage3"];
const active = document.getElementById("slide-img");
var index = 0;

if (index == 0) {
    elementPrev[0].classList.add("text-white");
}
elementNext[0].addEventListener('click', () => {
    if (index !== 2) {
        console.log(active)
        active.classList.remove(slideClass[index]);
        active.classList.add(slideClass[index + 1]);
        elementPrev[0].classList.remove("text-white");
        index++;
        if (index == 2) {
            elementNext[0].classList.add("text-white");
        }
    }
})

elementPrev[0].addEventListener('click', () => {
    if (index !== 0) {
        active.classList.remove(slideClass[index]);
        active.classList.add(slideClass[index - 1]);
        elementNext[0].classList.remove("text-white");
        index--;
        if (index == 0) {
            elementPrev[0].classList.add("text-white");
            elementNext[0].classList.remove("text-white");
        }
    }
})

setTimeout(() => {
    document.querySelector('.preloader').style.display = "none";
    document.querySelector('.homePage').classList.add('block2');
}, 4000);


function animation(element, mouvement) {
    const { scrollTop, clientHeight } = document.documentElement;
    const see = element.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + see).toFixed() - clientHeight * 0.99) {
        element.classList.add(mouvement);
    }
}
const test = document.getElementById('slideleft');
animation(test, 'slideleft');
const titre = document.querySelector('.title');
animation(titre, 'fadein');
window.addEventListener('scroll', () => {
    const anime2 = document.querySelector('.slideleft2');
    const anime3 = document.querySelector('.slideup');
    const animeone = document.querySelector('.slideupone');
    const animetwo = document.querySelector('.slideuptwo');
    animation(anime2, 'slideleft');
    animation(anime3, 'fadein');
    animation(animeone, 'fadein');
    animation(animetwo, 'fadein');
    const anime4 = document.querySelector('.anime4');
    animation(anime4, 'slideright');
    const anime5 = document.querySelector('.anime5');
    animation(anime5, 'fadein');
    const anime6 = document.querySelector('.anime6');
    animation(anime6, 'fadein');
    const anime7 = document.querySelector('.anime7');
    animation(anime7, 'fadein');
    const anime8 = document.querySelector('.anime8');
    animation(anime8, 'fadein');
    const anime9 = document.querySelector('.anime9');
    animation(anime9, 'fadein');
    const anime10 = document.querySelector('.anime10');
    animation(anime10, 'slideright');
    const anime11 = document.querySelector('.anime11');
    animation(anime11, 'slideleft');
    const anime12 = document.querySelector('.anime12');
    animation(anime12, 'fadein');

})