<div class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center">
    <p class="w-10">{i+1}</p>
    <img class="rounded-full w-14 h-14" src={user.userImg} alt={user.userName} height="150px" width="150px"/>
    <p class="mx-4 w-20">{user.userName}</p>
    <p class="mx-4 w-50">{user.userEmail}</p>
  </div>

  <script>
    export let user;
    export let i;
  </script>