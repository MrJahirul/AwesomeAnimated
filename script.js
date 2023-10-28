function panda(){


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

panda();

function cursor(){ 
var curs=document.querySelector(".cursor");
var main=document.querySelector("#main");
main.addEventListener("mousemove",function(dets){
    curs.style.left=dets.x+"px"
    curs.style.top=dets.y+"px"
})
}
cursor();

var tl= gsap.timeline({
    scrollTrigger:{
        trigger:".page1 .textSection",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:2,
    }
})

tl.to(".page1 .textSection h1",{
    x:-100,
 
},"panda")

tl.to(".page1 .textSection h2",{
    x:100,
 
},"panda")

tl.to(".page1 .videoSection>video",{
    scale:1.5,
 
},"panda")

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 0",
        scrub:2,
    }
},"page2")

tl2.to(".page2",{
    backgroundColor:"#fff",
})
tl2.to("h3",{
    x:60,
},"page2")

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page3 ",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2,
    }
})

tl3.to(".page3",{
    backgroundColor:"#0f0d0d",
})