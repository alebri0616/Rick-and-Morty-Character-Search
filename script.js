async function fetchData (){
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character/?name=rick&status=alive")
        if (!response.ok) {
            throw new Error ("Could'nt fetch the resource.");
        }
        const data = await response.json();
        console.log(data.results);
    }
    catch(error){
        console.error(error);
    }
} 

fetchData();