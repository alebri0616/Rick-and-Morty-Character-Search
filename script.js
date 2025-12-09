
const button = document.querySelector("button");
const image = document.querySelector("img");
async function fetchData (){

    try{

        const character  = document.getElementById("character").value.toLowerCase();
        
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}&status=alive`)
        if (!response.ok) {
            throw new Error ("Could'nt fetch the resource.");
        }
        const data = await response.json();
        console.log(data.results[0]);
        image.src = data.results[0].image;
    }
    catch(error){
        console.error(error);
    }
} 

button.addEventListener('click', () => {
    fetchData();
    image.style = "block";
});
