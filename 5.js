const fetch= require('node-fetch');

const fetchPokemon= async ()=>{
    try {
        const res=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-03-12&sortBy=publishedAt&apiKey=79391c0b931049109e07935e996eac31");
        const data= await res.json();
        console.log(data);   
    } catch (error) {
        console.error(error);
    }
};
fetchPokemon();