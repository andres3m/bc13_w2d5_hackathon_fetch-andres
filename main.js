async function getPokemon(){
    let response = await
    fetch("https://pokeapi.co/api/v2/pokemon/1/");
    let data = await response.json();
    console.log(data)
}
getPokemon()

async function get10RandomQuestions(){
    let response = await
    fetch("https://opentdb.com/api.php?amount=10");
    let data = await response.json();
    console.log(data)
}
get10RandomQuestions()

async function getDadJoke(){
    let response = await
    fetch("https://icanhazdadjoke.com/", {
  headers: { accept: "application/json" },
});
    let data = await response.json();
    console.log(data)
}
getDadJoke()

async function getHelloEnglishDefinition(){
    let response = await
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello`);
    let data = await response.json();
    console.log(data)
}
getHelloEnglishDefinition()