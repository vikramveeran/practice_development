
const no = document.querySelector(".no");
const movebtn = document.querySelector(".movebtn")
const h3 = document.querySelector(".movebtn h3")
no.addEventListener("mouseenter",()=>{
      gsap.to(movebtn,{
         x:100,
          duration:0.5,
         
      })
      h3.textContent = "NO"
})

