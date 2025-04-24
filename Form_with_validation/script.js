
let span=document.querySelector("#span");
let validateform=false;


function validate(){

let text =document.querySelector("#text-input");
let num =document.querySelector("#num-input");
let email =document.querySelector("#email-input");
let usermsg =document.querySelector("#usermsg");


let nameError = document.querySelector("#span");
let numError = document.querySelector("#error-num");
let emailError = document.querySelector("#error-email");
let msgError = document.querySelector("#error-msg");


let name =text.value;
let phonenum=num.value;
let emailid =email.value;
let msg =usermsg.value;
console.log(name,"name hai ayy");

if (name.length == 0) {
  nameError.innerText = "*Name is required";
  nameError.setAttribute("class","name-error");
  validateform=false;
}else if(name.length<8){
   nameError.innerText = "*Write full name";
   nameError.setAttribute("class","name-error");
   validateform=false;
}else{
   nameError.innerText = "";
   nameError.setAttribute("class"," name-error-done");
   validateform=true;
}




if (phonenum.length == 0) {
   numError.innerText = " *Number is required";
   numError.setAttribute("class","num-error");
   validateform=false;
}else if(phonenum.length!=10){
   numError.innerText = " *10 digits is required";
   numError.setAttribute("class","num-error");
   validateform=false;
}else{
   numError.innerText = "";
   numError.setAttribute("class","num-error-done");
   validateform=true;
}




if (emailid.length == 0) {
   emailError.innerText = "*Email is required";
   emailError.setAttribute("class","email-error");
   validateform=false;
}else if  (!emailid.includes("@")) {
   emailError.innerText = "*Invalid email";
   emailError.setAttribute("class","email-error");
   validateform=false;
}else{
   emailError.innerText = "";
   emailError.setAttribute("class","email-error-done");
   validateform=true;
}



 if (msg.length == 0) {
 msgError.innerText = "*Message is required";
 msgError.setAttribute("class","msg-error");
 validateform=false;
}else if(msg.length<30){
   msgError.innerText = " *30 words is required";
   msgError.setAttribute("class","msg-error");
   validateform=false;
}else{
   msgError.innerText = "";
   msgError.setAttribute("class","msg-error-done");
   validateform=true;
}

}
//30 more characters required.
function submit(){
   let validatemsg=document.querySelector("#validatemsg");
   let username=document.querySelector("#name-pop");
   let text =document.querySelector("#text-input");
   let fullname=text.value;   
 

 let card=document.querySelector("#card");
 if(validateform){
    card.setAttribute("class","remove");
    let popmsg=document.querySelector("#card-pop");
    popmsg.setAttribute("class","popup");
    username.innerText=`${fullname.toUpperCase()}`;


 }else{
   validatemsg.innerText="FILL FIRST !!";
   setTimeout(()=>{
      validatemsg.innerText="";
   },3000);
 }


}

