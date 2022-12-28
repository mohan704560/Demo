<div>
    <h1 class="text-2xl text-center mt-10">List of Users</h1>
    <FilterUsers on:filter={filter}/>
    {#each filteredUser as user,i(user.id)} 
    <User user={user} i={i} on:remove={remove}/>
    {:else}
    <p>No user found</p>
    {/each}
  </div>
    
  
  <script>
    import User from "./User.svelte";
    import FilterUsers from "./FilterUsers.svelte";

    let users = [{
        id:1,
        userImg : "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
        userName : "John",
        userEmail: "John@bitfumes.com",
        active:true
    },
    {   
        id:2,
        userImg : "https://tse4.mm.bing.net/th?id=OIP.ydzk1TTHOUmBDq8sIhZ9JwHaHa&pid=Api&P=0",
        userName : "Niky",
        userEmail: "Niky@bitfumes.com",
        active: false,
    },
    {
        id:3,
        userImg : "https://tse4.mm.bing.net/th?id=OIP.DktG3bZwa6AYh76EbTrxsAHaHa&pid=Api&P=0",
        userName : "Tanya",
        userEmail: "Tanya@bitfumes.com",
        active: false
    }
   ];
 
   var filteredUser = users;

   const filter=(e)=>{
    if(e.detail=="null"){
      return filteredUser=users;
    }
    else{
      const active = e.detail === "true";
      return filteredUser = users.filter((ele)=>ele.active === active)
    }
   }

   const remove=({detail})=>{
      console.log(detail);
   }
  </script>