
const button = document.querySelector("button");
const image = document.querySelector("img");
const gender = document.getElementById("gender");
const fullname = document.getElementById("fullname");
const species = document.getElementById("species");
const characterStatus = document.getElementById("status");

async function fetchData (){

    try{

        const character  = document.getElementById("character").value.toLowerCase();
        
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        if (!response.ok) {
            throw new Error ("Could'nt fetch the resource.");
        }
        const data = await response.json();
        
        image.src = data.results[0].image;
        image.style = "block";
        console.log(data.results)
        gender.textContent = "Gender: " + data.results[0].gender;
        fullname.textContent = "Full Name: " + data.results[0].name;
        species.textContent = "Species: " + data.results[0].species;
        characterStatus.textContent = "Status: " + data.results[0].status;
    }
    catch(error){
        console.error(error);
    }
} 

button.addEventListener('click', () => {
    fetchData();
    
    
});
