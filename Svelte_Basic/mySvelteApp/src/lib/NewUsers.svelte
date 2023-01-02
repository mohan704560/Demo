<script>
    import { createEventDispatcher} from "svelte";
    import Modal from "./Modal.svelte";
    const dispatch = createEventDispatcher();
   let showModal=false;

   let newUser={};

   $:disabledSubmitButton = !newUser.userName || !newUser.userEmail;

   const formHandler=(e)=>{
    dispatch("newUser", newUser)
    showModal=false;
   }

//    onMount(()=>{
//     const buttonData = document.getElementById("submit-button");
//    console.log(buttonData);
//    if(!newUser.userName || !newUser.userEmail){
//     buttonData.disabled=disabledSubmitButton;
//    }
//    })


   
    
</script>
<div class="my-auto">
    <button on:click={()=>(showModal=true)} class="px-4 py-1 bg-blue-800 text-white rounded cursor-pointer">New User</button>
    {#if showModal}
    <Modal on:close={()=>(showModal=false)} on:submit={formHandler}>
        <h1 class="text-2xl text-center">Create new user</h1>       
            <div class="py-1 px-2 my-4">
                <label for="">Name</label>
                <input bind:value={newUser.userName} type="text" class="px-2 py-1 rounded border w-full"/>
            </div>
            <div class="py-1 px-2 my-4">
                <label for="">Email</label>
                <input type="text" bind:value={newUser.userEmail} class="px-2 py-1 rounded border  w-full"/>
            </div>
            <div class="py-1 px-2 my-4 flex justify-between">
                <label for="">Active:</label>
                <div class="flex">
                <label for="true">Yes</label>
                <input type="radio" id="true" value={true} name="active" bind:group={newUser.active} class="px-2 py-1 rounded border  w-full mx-5"/>
                <label for="false">No</label>
                <input type="radio" value={false} id="false" bind:group={newUser.active} name="active" class="px-2 py-1 rounded border  w-full mx-5"/>
            </div>
            </div>
           
        <button slot="right-button" id="submit-button" class="px-2 py-1 bg-blue-800 text-white rounded" disabled={disabledSubmitButton}>Create</button> 
    </Modal>  
    {/if}
</div>