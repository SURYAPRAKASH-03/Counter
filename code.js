const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const second=document.querySelector("#second");


function reload(){
const currentyear=new Date().getFullYear();
const newyear= new Date(`january 1 ${currentyear+1} 00:00:00`); 
const currentdate=new Date();
const different=newyear-currentdate;
const d =Math.floor(different/1000/60/60/24);
const h =Math.floor((different/1000/60/60)%24);
const m =Math.floor((different/1000/60)%60);
const s =Math.floor((different/1000)%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h
minutes.innerHTML=m<10?"0"+m:m
second.innerHTML=s<10?"0"+s:s
}
setInterval(reload,1000);
