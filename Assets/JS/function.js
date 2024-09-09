// :::: NAV START :::: 

let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let body = document.querySelector('body');

moon.addEventListener('click', ()=>{
    moon.classList.add('change');
    body.classList.add('swing');
});

sun.addEventListener('click', ()=>{
    moon.classList.remove('change');
    body.classList.remove('swing');
});


let nav = document.querySelector('nav');
let initvalue = 0;
window.addEventListener('scroll', function(){
    if(initvalue > window.scrollY){
        nav.classList.add('active_bar');
    }else{
        nav.classList.remove('active_bar');
    }
    initvalue = window.scrollY;
});

// :::: NAV END :::: 


// :::: SIDE MENU START :::: 

let book = document.querySelector('.book');
let menu = document.querySelector('#menu');
let cross = document.querySelector('.cross');

book.addEventListener('click', ()=>{
    menu.classList.add('active');
});

cross.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

menu.addEventListener('click', function(e){
    if(e.target.classList.contains('active')){
        menu.classList.remove('active');   
    }
});

// :::: SIDE MENU END :::: 


// :::: LOG IN START :::: 

let show = document.querySelector('.show');
let hide = document.querySelector('.hide');
let inPass = document.querySelector('.in_pass');

show.addEventListener('click', function(){
    show.classList.add('icon_active');
    inPass.type = "password";
});

hide.addEventListener('click', function(){
    show.classList.remove('icon_active');
    inPass.type = "text";
});



let log_in = document.querySelector('.log_in');
let log = document.querySelector('#log');
let close = document.querySelector('.close');

log_in.addEventListener('click', ()=>{
    log.classList.add('switch');
});

close.addEventListener('click', ()=>{
    log.classList.remove('switch');
});

log.addEventListener('click', function(e){
    if(e.target.classList.contains('switch')){
        log.classList.remove('switch');   
    }
});

// :::: LOG IN END :::: 



// :::: SIGN UP START :::: 

let on = document.querySelector('.on');
let off = document.querySelector('.off');
let onPassword = document.querySelector('.on_password');

on.addEventListener('click', function(){
    on.classList.add('pw_active');
    onPassword.type = "password";
});

off.addEventListener('click', function(){
    on.classList.remove('pw_active');
    onPassword.type = "text";
});


let sign_up = document.querySelector('.sign_up');
let sign = document.querySelector('#sign');
let cut = document.querySelector('.cut');

sign_up.addEventListener('click', ()=>{
    sign.classList.add('swipe');
});

cut.addEventListener('click', ()=>{
    sign.classList.remove('swipe');
});

sign.addEventListener('click', function(e){
    if(e.target.classList.contains('swipe')){
        sign.classList.remove('swipe');   
    }
});

// :::: SIGN UP END :::: 


// :::: USER ACCOUNT START :::: 

let user_icon = document.querySelector('.user');
let user_info = document.querySelector('#user');
let vanish = document.querySelector('.vanish');

user_icon.addEventListener('click', function(){
    user_info.classList.add('need');
});

vanish.addEventListener('click', function(){
    user_info.classList.remove('need');
});

user_info.addEventListener('click', function(e){
    if(e.target.classList.contains('need')){
        user_info.classList.remove('need');
    }
});


let log_out = document.querySelector('.log_out');

log_out.addEventListener('click', function(){
    alert('Are you sure that you want to log out?');
});

// :::: USER ACCOUNT END :::: 




// :::: SCROLL START :::: 

let scroll = document.querySelector('.scroll');

window.addEventListener('scroll', function(){
    let totalHeight = body.clientHeight
    let fromTop = window.scrollY;
    let internalHeight = window.innerHeight;
    let subHeight = totalHeight - internalHeight;
    let result = Math.round((100 / subHeight) * fromTop);

    scroll.style.background = `conic-gradient(#30336b, #30336b ${result}%, #38ada9 ${result}%)`;
    
});

// :::: SCROLL END :::: 


// :::: PROGRESS BAR START ::::

// let scrollBar = document.querySelector('#scroll_bar');

// window.addEventListener('scroll', function(){
//     if(window.scrollY > 300){
//         scrollBar.classList.add('growing_bar');
//     }else{
//         scrollBar.classList.remove('growing_bar');
//     }
// });

// :::: PROGRESS BAR END ::::