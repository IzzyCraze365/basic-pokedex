// Unit 4 - Day 018
// Poke'dex Challenge


console.log("Make your own Pokemon Card");
let pokemonChosen = document.querySelector(".search-input"); //Going Fishing
console.log("User Input =", pokemonChosen);

let catchButton = document.querySelector(".submit-btn"); //Going Fishing
let pokemonName = document.querySelector(".name");
let pokemonHitPoints = document.querySelector(".hp");
let pokemonWeight = document.querySelector(".weight");
let pokemonPicture = document.querySelector("img");
let pokemonAbility = document.querySelector(".ability");



catchButton.addEventListener("click", async (rareCandy) =>{
    rareCandy.preventDefault()

    let data = await fetchPokemon(pokemonChosen.value.toLowerCase());
    //console.log(data); //! TEST
    populatePokemonCard(data);
});

function populatePokemonCard(data){
    console.log(data);
    pokemonName.innerText = titleCase(data.name);
    pokemonHitPoints.innerHTML = `<h3 class="hp"><span>HP</span> ${data.stats[0].base_stat}</h3>`; //New way to change the template
    pokemonWeight.innerText = (Math.round(data.weight/0.453592))/10;
    pokemonPicture.src = data.sprites.front_default;
    pokemonAbility.innerText = titleCase(data.abilities[0].ability.name);
}


async function fetchPokemon(pokemon) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  console.log("URL Here", url); //! TEST

  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}


  // Capitalize the Player's Input
  function titleCase(myString) {
    return (myString
      .split(" ")
      .map((word) => {
        word = word.trim();
        let firstLetter1 = word.charAt(0).toUpperCase();
        let restOfWord1 = word.slice(1).toLowerCase();
        return firstLetter1 + restOfWord1;
      })
      .join(" "));
  }


/* 
catchButton.addEventListener("click",runPokeDex());
function runPokeDex(){
    console.log("Catchem all");
}

Same as the Arrow Function below

catchButton.addEventListener("click", (hotdog) => {
    hotdog.preventDefault();
    console.log("Catchem all");
});
*/
