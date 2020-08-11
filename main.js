async function getAll(){

    //fetch data
    try {
        const result = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=20/`);
        const data = await result.json();
        console.log(data);

        // turn json array into just an array of pokemon names
        const list = data.results;
        console.log(list); 

     // when you open the page it chooses a random pokemon from const list
        let random = list[Math.floor(Math.random() * list.length)]; 
        console.log(random); 
    
    // from the random pokemon get url
        const pokeurl = random.url;
        console.log(pokeurl);


    // fetch poke url to get details on individual pokemon
       let fetchPokeData = await fetch (pokeurl);
       let pokeData = await fetchPokeData.json();
       console.log(pokeData);
       
    // once we get data choose what you want to show
       const pokemon = {
           name: pokeData.name,
           id: pokeData.id,
           image: pokeData.sprites['front_default'],
    // goes through each pokemon type and puts into a single array. Then converts to a string
           type: pokeData.types.map(t => t.type.name).join(',')
          
       };
       console.log(pokemon);
        
    } catch(error) {
        alert(error);
    }
    
};



getAll();