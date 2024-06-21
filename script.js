window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

let main = document.querySelector("body")
crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x+"px"
      crsr.style.top = dets.y+"px"
})




var counter = document.querySelector("#count")
var loader =  document.querySelector(".loader")
var count=0;
setInterval(function(){
 if(count<100){
    count++;
 counter.innerHTML=count;
 }
 else{
    counter.innerHTML="loading...";
 }
},20)





var tl = gsap.timeline();


// tl.to(".loader",{
//     y:"-100%",
//     delay:3.5,
//     duration:2,

// })

tl.to(".loader #count",{
    fontSize: "10000px",
    scale:10,
    duration:3.5,
    delay:3,
})



// tl.from(".page1",{
//     y:"100%",
//     // duration:1,
//     opacity:0
// })

tl.to(".loader",{
    display:"none"
})

tl.from(".nav",{
    y:"-65px",
})


tl.from(".pag1-up span h1",{
    y:450,
    duration: 1,
    stagger:0.2,
    opacity:0
})


gsap.to(".page2 h1", {
    transform: "translateX(-75%)",
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        // markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
});

gsap.to(".page4 video", {
    width: "100%",
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 0",
        scrub: 2,
        // pin: true
    }

})

gsap.from(".page5 h1",{
    y:200,
    duration:1.5,
    scrollTrigger:{
        trigger:".page5 h1",
       
        start:"top 60%",
        // markers: true,

    }
})



gsap.from(".page7 .div h1",{
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:".page7 .div h1",
        stagger:0.2,
        // markers: true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})





var posters = document.querySelectorAll(".page6 .div img");
var cursor = document.querySelector(".cursor");

posters.forEach(function(poster) {
    poster.addEventListener("mouseenter", function() {
        cursor.style.transition = "all 0.3s ease";
        cursor.style.height = "100px";
        cursor.style.width = "100px";
        cursor.style.backgroundColor = "rgb(101, 83, 51)";
        // cursor.style.mixBlendMode = "normal";
    });

    poster.addEventListener("mouseleave", function() {
        cursor.style.transition = "all 0.3s ease";
        cursor.style.height = "20px";
        cursor.style.width = "20px";
        cursor.style.backgroundColor = "rgb(243,199,124)";
        // cursor.style.mixBlendMode = "difference";
    });
});

var nav = document.querySelector(".nav");

// Store the initial scroll position
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

// Listen for scroll event
window.addEventListener("scroll", function() {
    // Get current scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        gsap.to(nav, { y: "-4.5vw" });
    } else {
        // Scrolling up
        gsap.to(nav, { y: "0" });
    }

    // Update last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);



gsap.to(".page7-2 .image",{
    width:"100%",
    scrollTrigger:{
        trigger:".page7-2",
        stagger:0.2,
        // markers: true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})




