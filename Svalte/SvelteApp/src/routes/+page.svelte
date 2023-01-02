<!-- <script context="module">

    /**@type {import('@sveltejs/kit').Load}*/
    async function load(page){
     return {
        props:{
            recipes:[{
                title:"hello",
                image:"image"
            }]
           
        }
     }
    }

</script>

<script>
	import { onMount } from "svelte";

    export let title;
   
    let data=[];
 onMount(async()=>{
    console.log(title);
    // const res = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e6363c89279d46eca0c80ce53ed34331");
    // const {results} = await res.json();
    // data = results;
    // console.log(data);
 })
</script>

<h1>Food Recepies</h1>
{title}
{#each data as item}
<div>
    <p>{item.title}</p>
    <img src={item.image} alt={item.title}/>
</div>
{/each} -->