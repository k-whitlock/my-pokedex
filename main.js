async function getPokemon(){

    //fetch data
    try {
        const result = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=20/`);
        const data = await result.json();
        console.log(data);

      // turn json array into just an array of pokemon names
      const pokemon = data.results;
        
      console.log(pokemon);
      

  // when screen loads choose a random pokemon from const pokemon
  let random = pokemon[Math.floor(Math.random() * pokemon.length)]; 
      console.log(random);
      
  // from the random pokemon get url
  const pokeurl = random.url;
  console.log(pokeurl);


        
    } catch(error) {
        alert(error);
    }
    
};

getPokemon();