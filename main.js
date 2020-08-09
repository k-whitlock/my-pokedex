async function getPokemon(){

    //fetch data
    try {
        const result = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=20/`);
        const data = await result.json();
        console.log(data);

    

        
    } catch(error) {
        alert(error);
    }
    
};

getPokemon();