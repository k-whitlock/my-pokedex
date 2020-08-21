//DOM OBJECTS
const pokeScreen = document.querySelector('.poke-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeImage = document.querySelector('.poke-image');
const pokeFirstType = document.querySelector('.poke-first-type');
const pokeSecondType = document.querySelector('.poke-second-type');
const nextPoke = document.querySelector('.poke-btn');


    

//get data for all pokemon
function getAll () {


fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(res => res.json())
    .then(data => {
        
    const results = data['results'];
    

    // when you open the page it chooses a random pokemon from const list
    let random = results[Math.floor(Math.random() * results.length)]; 
    console.log(random); 

// from the random pokemon get url
    let pokeurl = random['url'];
    console.log(pokeurl);





    });

};

getAll();



    

    

    
    




