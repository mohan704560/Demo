<div transition:fly={{duration:1000, x:200}} class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center relative">
  <button on:click={remove} class="w-5 p-0 border-0 absolute -top-2.5 -right-2.5 bg-red-300 text-white text-sm hover:bg-red-700 rounded-full">x</button>
    <p class="w-10">{i+1}</p>
    <img class="rounded-full w-14 h-14" src={user.userImg} alt={user.userName} height="150px" width="150px"/>
    <p class="mx-4 w-20">{user.userName}</p>
    <p class="mx-4 w-50">{user.userEmail}</p>
  </div>

  <script>
    import { createEventDispatcher } from "svelte";
    import { slide,fly } from "svelte/transition";


    export let user;
    export let i;
    
    const dispatch = createEventDispatcher();
    const remove=()=>{
     dispatch("remove",user.id);
    }
  </script>