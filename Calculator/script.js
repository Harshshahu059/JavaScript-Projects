let display=document.querySelector("#userinput");
let userinput="";
function calculate(element){    
    userinput+=element.value;    
    display.value=userinput;
    let result=document.querySelector("#equal");
    result.addEventListener("click",()=>{
        display.value=eval(userinput);
        userinput=display.value;
    })
}

function remove(){
  display.value="";
  userinput="";
}
function deletelast(){
    let arr=userinput.toString().slice(0,-1);
    userinput=arr; 
    display.value=userinput;  
    console.log(arr);  

}