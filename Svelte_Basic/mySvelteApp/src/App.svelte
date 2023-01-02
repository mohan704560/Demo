<script>
    import Users from "./page/Users.svelte";
    import {Router, Route, Link} from "svelte-navigator";
    import Home from "./page/Home.svelte";
    // import { count } from "./store";
    
    // let countValue;
    // count.subscribe((value)=>(countValue=value));

    // function increment(){
    //     count.update(value=>value+1);
    // }
    // function decrement(){
    //     count.update(value=>value-1); 
    // } 
</script>

<!-- <button on:click={increment}>+</button>
{countValue}
<button on:click={decrement}>-</button> -->




<Router>
    <nav class="p-4 bg-blue-800 text-white">
        <Link class="mx-4 cursor-pointer hover:underline" to="/">Home</Link>
        <Link class="mx-4 cursor-pointer hover:underline" to="/users">Users</Link>
    </nav>

<Route path="/">
   <Home/>
</Route>
<Route path="/users">
    <Users/>
 </Route>
</Router>