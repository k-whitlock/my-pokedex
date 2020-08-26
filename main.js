//DOM OBJECTS
const pokeScreen = document.querySelector('.poke-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeImage = document.querySelector('.poke-image');
const pokeFirstType = document.querySelector('.poke-first-type');
const pokeSecondType = document.querySelector('.poke-second-type');
const nextPoke = document.querySelector('.poke-btn');

//ADDING EVENT LISTENERS
nextPoke.addEventListener('click', getAll);
    

//get data for all pokemon
function getAll () {


fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(res => res.json())
    .then(data => {
        
    //destructing used to get data from array
    const results = data['results'];
   

    // when you open the page it chooses a random pokemon from const list
    let random = results[Math.floor(Math.random() * results.length)]; 
  

// from the random pokemon get url
    let pokeurl = random['url'];
    


//fetch data for individual pokemon
fetch(pokeurl)
    .then(res => res.json())
    .then(data => {
    
        
    //shows data on screen 
    pokeScreen.classList.remove('d-none');

    //get the data types
    const dataTypes = data['types'];
    console.log(dataTypes);
    const dataFirstType = dataTypes[0];
    const dataSecondType = dataTypes[1];
    pokeFirstType.textContent = dataFirstType['type']['name'];

    //if there are more than 1 type remove hide class vice versa
    if(dataSecondType) {
        pokeSecondType.classList.remove('d-none');
        pokeSecondType.textContent = dataSecondType['type']['name'];
    } else {
        pokeSecondType.classList.add('d-none');
        pokeSecondType.textContent = '';
    } 
    // if there is no image put blank 
    pokeImage.src = data['sprites']['front_default'] || "";

    pokeName.textContent = data['name'];

    // put # in front of number, convert to string, then add "0" in front of it if less than 100
    pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');

        });


    });

};

getAll();



    

    

    
    




