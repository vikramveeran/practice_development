const row1 = document.querySelectorAll(".row_1");
const row2 = document.querySelectorAll(".row_2");
const row3 = document.querySelectorAll(".row_3");
const row4 = document.querySelectorAll(".row_4");
const row5 = document.querySelectorAll(".row_5");
const row6 = document.querySelectorAll(".row_6");
const row7 = document.querySelectorAll(".row_7");
const row8 = document.querySelectorAll(".row_8");
const row9 = document.querySelectorAll(".row_9");

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g} ,${b})`;
}

row1.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
});  

row2.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row3.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row4.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row5.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row6.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row7.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row8.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 

row9.forEach((row) => {
      row.addEventListener("mouseenter",()=>{
            row.style.backgroundColor = randomColor(); 
             
      })  
}); 