let a=document.querySelectorAll("#box");
let b=document.getElementById("reset");
let c=document.getElementById("TEXT");
let choice=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnX=true;
a.forEach((hi)=>{
    hi.addEventListener("click",()=>{
     if(turnX){
        hi.innerHTML="X"
        turnX=false;
     } 
     else{
     hi.innerHTML="O";
     turnX=true;
     }
     hi.disabled=true;
     checkWinner();
    });
});
const disBox=()=>{
for(box of a){
    box.disabled=true;
}
};
const checkWinner=()=>{
for(pattern of choice){
let pos1=a[pattern[0]].innerHTML;
let pos2=a[pattern[1]].innerHTML;
let pos3=a[pattern[2]].innerHTML;
if(pos1!=""&&pos2!=" "&&pos3!=" "){
    if(pos1===pos2 && pos2===pos3){
        disBox();
    c.innerHTML=`Congratulations,Winner is ${pos1}`;
    }
}
}
};
b.addEventListener("click",function(){
    for(box of a){
        box.innerHTML=" ";
        turnX=true;
        c.innerHTML=" ";
    }
});
