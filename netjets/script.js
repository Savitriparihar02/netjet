var t1 = gsap.timeline()

t1.from(".navbar",
    {
        y:-30,
        duration:2,
        opacity:0,
        stagger:0.2
    })

t1.from(".hero-content h1, .hero-content p,.hero-content a",
    {
        y:30,
        duration:1,
        opacity:0,
        stagger:0.2
    })   

var flag = 0    
var nav = document.querySelector(".navbar-links .i .i1") 
var nav2 = document.querySelector(".navbar-links .i .i2")  
var menu = document.querySelector(".menu")
nav.addEventListener("click",function(){
    if(flag == 0){
        menu.style.display = "initial"
        nav.style.display = "none"
        nav2.style.display = "initial"
        flag = 1
    }else{
         nav.style.display = "initial" 
         flag = 0
    }

})

nav2.addEventListener("click",function(){
  if(flag == 0){
    menu.style.display = "none"  
    nav.style.display = "initial"
    flag = 1
}else{
     nav.style.display = "initial"
     nav2.style.display = "none"
     menu.style.display = "none"  
     flag = 0
}
})