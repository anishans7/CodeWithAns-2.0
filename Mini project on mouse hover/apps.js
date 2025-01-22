let react = document.getElementById("center");
react.addEventListener("mousemove", function (details) {
  let reactlocation = react.getBoundingClientRect();
  let insidereact = details.clientX - reactlocation.left;

  if (insidereact < reactlocation.width / 2) {
    let redcolor = gsap.utils.mapRange(0, reactlocation.width / 2, 255, 0, insidereact);
    gsap.to(react,{
        backgroundColor: `rgb(${redcolor},0, 0)`,
        ease:Power4,
        duration: 1
    })
  } else {
    let bluecolor = gsap.utils.mapRange(reactlocation.width / 2, reactlocation.width, 0, 255, insidereact);
    gsap.to(react,{
        backgroundColor: `rgb(0, 0, ${bluecolor})`,
        
        duration: 1
    })
}
});
react.addEventListener("mouseleave", function(){
    gsap.to(react,{
        backgroundColor: "white",
      
    })
})