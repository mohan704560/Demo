<div transition:fade>
    <h1 class="text-2xl text-center mt-10">List of Users</h1>
    <div class="flex justify-between mx-4">
    <FilterUsers on:filter={filter}/>
    <NewUsers on:newUser={add}/>
  </div>
  <progress max="10" value={$progress} class="w-full mx-4"/>
  <!-- <progress max="10" min="0" value={$progress} class="w-full mx-4"/> -->
    {#each filteredUser as user,i(user.id)} 
    <div animate:flip={{delay:250, duration:1000, easing:quintOut}}>
      <User user={user} i={i} on:remove={remove}/>
    </div>
    {:else}
    <p>No user found</p>
    {/each}
  </div>
    
  
  <script>
    import User from "./User.svelte";
    import FilterUsers from "./FilterUsers.svelte";
    import NewUsers from "./NewUsers.svelte";
    import {users, remove, add} from "../store"
    import {tweened} from "svelte/motion"
    import { onMount } from "svelte";
    import {cubicIn, quintOut} from "svelte/easing"
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";

    // _users.subscribe((value)=>(users=value));
 
  $: filteredUser = $users;

   const filter=(e)=>{
    if(e.detail=="null"){
      return filteredUser=$users;
    }
    else{
      const active = e.detail === "true";
      return filteredUser = $users.filter((ele)=>ele.active === active)
    }
   }

  const progress = tweened(0,
  {
    duration:1000,
    easing:cubicIn
  });

  onMount(()=>{
    progress.set(filteredUser.length);
  })
  </script>