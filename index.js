let butt1=document.getElementById("button1");
let butt2=document.getElementById("button2");
let tochangecodeInto=document.querySelector(".innercode");
let copyalert=document.querySelector(".codegenerate");
// let buut1=document.querySelector("btn1");
// let buut2=document.querySelector("btn2");
let rgb1="#000";
let rgb2="#fff";

const hexvalues=()=>{
  let myhexcode="0123456789abcdef";
  let color="#";
  for(let i=0;i<6;i++){
  color+=myhexcode[Math.floor(Math.random()*16)]
  }
 return color;
}

// var color="#";
 const handlebutt1=()=>{
   rgb1=hexvalues();
  // console.log(rgb1);
   document.body.style.backgroundImage=`linear-gradient(55deg,${rgb1},${rgb2})`;
  tochangecodeInto.innerHTML=`linear-gradient(55deg, ${rgb1}, ${rgb2})`;
  butt1.innerText=`${rgb1}`;
}



const handlebutt2=()=>{
   rgb2=hexvalues();
  // console.log(rgb1);
   document.body.style.backgroundImage=`linear-gradient(55deg, ${rgb1}, ${rgb2})`;
   tochangecodeInto.innerHTML=`linear-gradient(55deg, ${rgb1}, ${rgb2})`;
   butt2.innerText=`${rgb2}`;
  //  copyalert.onclick(alert("text copied!!"))


}



tochangecodeInto.addEventListener("click",()=>{
  navigator.clipboard.writeText(tochangecodeInto.innerText)
})

copyalert.addEventListener("click",()=>{
  alert("copied!!")
})


// linear-gradient(55deg, #f0a19d, #9e5d3f)

console.log("loaded");
butt1.addEventListener("click",handlebutt1);
butt2.addEventListener("click",handlebutt2);