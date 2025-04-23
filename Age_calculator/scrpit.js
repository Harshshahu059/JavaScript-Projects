let userinput=document.querySelector("#inputdata");
userinput.max=new Date().toISOString().split("T")[0];


function caldate(){
if(!Boolean(userinput.value)){
   alert("Select your Date of birth !!");
   return 
}
let dob=new Date(userinput.value);
    let d1 =dob.getDate();
    let m1=dob.getMonth()+1;
    let y1=dob.getFullYear();
let tob=new Date();
    let d2 =tob.getDate();
    let m2=tob.getMonth()+1;
    let y2=tob.getFullYear();

 let d3,m3,y3;

 y3=y2-y1;

if(m2>=m1){
    m3=m2-m1;
}else{
    y3--;
    m3=12+m2-m1;
}


if(d2>=d1){
    d3=d2-d1;
}else{
    m3--;
    d3=getDaysInMounth(y1,m1)+d2-d1;
}
if(m3<0){
    m3=11;
    y3--;
}

document.querySelector("#result").innerText=`Age:${y3} years,${m3} month and ${d3}days`

   console.log(d3,m3,y3);

}
function getDaysInMounth(year,month){
    return new Date(year,month+1,0).getDate();
}



