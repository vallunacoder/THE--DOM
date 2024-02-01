alert(" video 80, I did it! ");

//fetch = function used for making HTTP request to fetch ( to go get) resources.
//  (JSON style data, images, files)
//  simplifies asynchronous data fetching in JavaScript and
//  used for interacting with APIs to retrieve and send data asynchronously over 
// the web.  fetch(url, {method: "GET"})

// TRY EACH CODE BY STEP . remember to comment your code  once you go to the next step. 
// step 1. fetching data to an API that actually works:

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then( response => {
//       if(!response.ok){
//         throw new Error("could not fetch 😫");
//       }
//       return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));


// step 2. fetching data to an API that don't exits:

// fetch("https://pokeapi.co/api/v2/pokemon/valechu")
// .then( response => {
//   if(!response.ok){
//     throw new Error("could not fetch 😫");
//   }
//   return response.json();
// })
// .then(data => console.log(data.name))
// .catch(error => console.error(error));


// step 3. using Async and await

//call the function so it works
// fetchData();

// async function fetchData(){
//    try{
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
//       if(!response.ok){
//         throw new Error("Could not fetch👀");
//       }

//       const data = await response.json();
//       console.log(data);
//    }
//    catch(error){
//     console.error(error);
//    }
// }


//And you just learned how to use async and await to fetch a resource. 

//  Now let's make it again but let's make it functional.




async function fetchData(){

  try{

      const  pokemonName = document.getElementById("pokemonName").value.toLowerCase();
     
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if(!response.ok){
        throw new Error("Could not fetch👀");
      }

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
      


      imgElement.src =  pok
    }
   catch(error){
    console.error(error);
   }
}








    // homework
    // what is promise base ? 