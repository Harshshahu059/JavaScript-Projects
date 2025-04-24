let speech= new SpeechSynthesisUtterance();
console.log(speech);
let voices =[];
let select=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    console.log(voices);
    speech.voice=voices[0];


    voices.forEach((voice,i)=>(select.options[i]= new Option(voice.name,i)));
};

select.addEventListener("change",()=>{
    speech.voice=voices[select.value];
})






function convert(){
    let userinput=document.querySelector("#input").value;
    console.log(userinput);
    speech.text=userinput;
    console.log(speech);
    window.speechSynthesis.speak(speech);
   
}