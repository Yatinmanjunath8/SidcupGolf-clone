let tl = gsap.timeline()
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

tl.to("#nav",{
    backgroundColor: "rgb(0, 0, 0)",
    height: '15vh',

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -40",
        scrub:2
    }
})
tl.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#page1 h2",
        scroller:"body",
        start:"top 170",
        scrub:true
    }
})
tl.from("#about",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#scroller",
        scroller:"body",
        start:"top 360",
        end:"top 610",
        scrub:2
    }
})
tl.from(".card",{
    scale: 0.8,
    stagger: 0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
    
})
console.log("true")
tl.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    }

  })
tl.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    }

  })
tl.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    }
    
  })
  
