<script>
	import { onMount } from "svelte";

/** @type {import('./$types').PageData} */
  export let data;

</script>

<h1 class="text-2xl text-center mb-10">Food Recepies</h1>
<div class="grid grid-cols-3 gap-4">
  {#each data.results as item}
  <a href={`/recipes/${item.id}`} class="relative">
    <img src={item.image} alt={item.title} class="rounded-lg shadow-md"/>
      <p class="text-sm absolute z-20 top-0 mt-20 text-center inset-x-0 text-white">{item.title}</p> 
  </a>
  {/each}
</div>
