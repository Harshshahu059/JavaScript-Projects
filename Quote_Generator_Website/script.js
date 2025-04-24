let url="https://api.api-ninjas.com/v1/quotes";


let quotes=document.querySelector("#quote");
let author=document.querySelector("#author");

let getdata= async()=>{
    quotes.innerText="loading......";
    author.innerText=`----loading...`;
 let data=await fetch(url,{
      method: 'GET',
      headers: {
        'X-Api-Key':APIKEY  //  Insert your API key here
      }
    });
 let quote=await data.json();
 console.log(quote);
 quotes.innerText=quote[0].quote;
 ;
 author.innerText=`----${quote[0].author}`;
}



let quotegenerate=()=>{
    getdata();

}
