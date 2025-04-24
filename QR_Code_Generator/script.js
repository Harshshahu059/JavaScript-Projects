

let input=document.querySelector("#userinput");
input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        generateQR();
    }
})



let  generateQR = ()=>{
    let userinput=document.querySelector("#userinput");
    let input=userinput.value;
    if(input ==""){
        userinput.setAttribute("class","error");
        
    }else{
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
    let QRimg=document.querySelector("#QRimg");
      QRimg.setAttribute("Class","QRborder");
      QRimg.innerHTML=`<img src=${url} id="img">`

    }

}