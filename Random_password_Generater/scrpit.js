let output=document.querySelector("#input");

var password="";


let lowercase ="abcdefghijklmnopqrstuvwxyz";
let uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers   = "1234567890";
let symbol    ="!@#$%^&*()?/{}[]~";
let random ="@#123harhsJAJDFO><";
let refershbtn=document.querySelector("#refershbtn");


function generatepass(){
  
  password +=lowercase[Math.floor(Math.random()*lowercase.length)];
  password +=uppercase[Math.floor(Math.random()*uppercase.length)];
  password +=numbers[Math.floor(Math.random()*numbers.length)];
  password +=symbol[Math.floor(Math.random()*symbol.length)];
  password +=symbol[Math.floor(Math.random()*symbol.length)];

  while(password.length<12){
    password +=random[Math.floor(Math.random()*random.length)];

  }
  
 output.value=password;
   console.log(output.value); 

   
  
}

function refersh(){
  password=""
  output.value="";
}

function copypassword(){
  let newoutput=document.querySelector("#input");
let text = newoutput.value;
  output.select();
  document.execCommand("copy");
  if(text==""){
    alert("PLzz Click Generate ");
  } else{
    alert("Copied!!!")
  }
  
 }
  
  



// randomchoose= Math.floor(Math.random() *3);