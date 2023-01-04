/** @type {import('./$types').PageLoad} */
export async function load (){
    const apiKey=import.meta.env.VITE_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    if(res.ok){
        return data;
    }
    
    return {error :"Fetch to load data"};
}