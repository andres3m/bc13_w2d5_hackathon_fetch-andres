/*
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
*/


/*
PLAN TO BUILD a POKEDEX:

0. Test con console that we can get the info from the API ✅
1. Choose the visual structure or interface of our POKEDEX to be coded in .html
It can contain: 

main title (title)*
main logo (img) to remove background squares ❗
main heading (h1)*
subheading (h2) optional
search box (textinput)*
search (button)*
Results (p)*


2. Code the chosen structure in the .html file.✅
3. Code on .js file the code that allow us to search for a pokemon by name and it
returns to us it's information:

-async Function that bring to us the data from 
the API*
-select p with id #pokemonresults*
-get the info out of the data*
-change the text pf the p tp that info*
-call the function at the bottom 

-select buttpn with id #search
-store button in a variable

-Attach Event listener to that button with 
addEventListener method
-tell the event listener to list for a click
-give the event listener the ability to call 
getpokemoninfo() when the click happens


[Behaviour of the webpage]
-When we enter to the website:
-show static website
-if user type a pokemon name and click search button the site will show the info of
that pokemon.
-if there is no match to the search, the site will return, " Pokemon not found" message.


4 o 5. Give style to the webpage, by adding a background color and some style to the
info shown.
4 o 5 If there is a picture of each pokemon on the database: try to show it on the 
information result of the searched pokemon

6. If we have time we can try to show a hint autocomplete on the search box so the site 
will try to autocomplete the name of the pokemon the user typed.

*/



async function getAllPokemon(){
    for (let i = 1; i <= 100; i++) {
        let response = await
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let data = await response.json();
        console.log(data);
        const cards = document.querySelector(".allPokeCards")
        let card = document.createElement("div");
        card.setAttribute("class", "pokeCard");
        card.innerHTML =`
        <img class="pokeAllImg" src="${data.sprites.front_default}" alt="${data.name}">
        <h2>${data.name}</h2>`
        cards.appendChild(card);

    }

}
  let getAllButton = document.querySelector(".getAllButton")
  getAllButton.addEventListener("click",getAllPokemon)


  
  async function getRandomPokemon(){
      let randomI = Math.floor(Math.random() * 100) + 1;
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomI}/`);
      let data = await response.json();
      const cards = document.querySelector(".allPokeCards")
      let card = document.createElement("div");
      card.setAttribute("id", "randomPokeCard");
      card.innerHTML=`
      <img id="pokeRanImg" src="${data.sprites.front_default}" alt="${data.name}">
      <h2 class="pokeRanName">${data.name}</h2>`
      cards.appendChild(card);
    }
    

let getRandomButton = document.querySelector(".getRandomButton")
getRandomButton.addEventListener("click",getRandomPokemon)

    
    
    
    
    
    
    async function getPokemonbyName(){
    
    }
/*
const checkbox = document.getElementById('check-box');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    h1.classList.add('funky')
    console.log('Checkbox is checked');
  } else {
    h1.classList.remove('funky')
    console.log('Checkbox is not checked');
  }
});
*/
