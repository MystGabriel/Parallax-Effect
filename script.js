// Parallax
let bg = document.getElementById("bg");
let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");
let st1 = document.getElementById("st1");
let st2 = document.getElementById("st2");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    bg.style.top = value * 0.8 + 'px';
    pl1.style.top = value * 0.6 + 'px';
    pl2.style.top = value * 0.7 + 'px';
    st1.style.top = value * 0.5 + 'px';
});