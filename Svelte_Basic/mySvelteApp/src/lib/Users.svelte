<div>
    <h1 class="text-2xl text-center mt-10">List of Users</h1>
    <div class="ml-4 mt-4">
    <label for="user-filter">Filter User</label>
    <select name="user-filter" id="user-filter" class="border rounded-lg px-4 py-2 ml-4" on:change={filter}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
    {#each getUsers() as user,i(user.id)}
    <User user={user} i={i}/>
    {:else}
    <p>No user found</p>
    {/each}
  </div>
  
  <script>
    import User from "./User.svelte";


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

   const getUsers =()=>{
    return users;
   }

   const filter=()=>{
    alert("Hii")
   }
  </script>