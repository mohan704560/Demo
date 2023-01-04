<script>
	import { each } from "svelte/internal";

    export let data;
    
</script>

<h1 class="text-2xl text-center mb-10">{data.title}</h1>
<div class="flex justify-between">
<img width="200" height="200" src={data.image} alt={data.title} class="rounded-lg shadow-md"/>
<div>
<div>
    <h2 class="text-xl font-bold">Ingredients</h2>
    {#each data.extendedIngredients as ingredient }
         <p class="text-gray-600 text-sm">{ingredient.name}</p>
    {/each}
</div>
<div>
    <h2 class="text-xl font-bold" >Cuisines</h2>
    {#each data.cuisines as cuisine}
         <p class="text-gray-600 text-sm" >{cuisine}</p>
    {/each}
</div>
</div>
</div>
