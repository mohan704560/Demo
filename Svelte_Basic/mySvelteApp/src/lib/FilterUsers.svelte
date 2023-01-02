<div>
<label for="user-filter">Filter User</label>
    <select name="user-filter" id="user-filter" class="border rounded-lg px-4 py-2 ml-4" on:change={filter}>
      <option value={null}>All</option>
      <option value={true}>Active</option>
      <option value={false}>Inactive</option>
    </select>
  </div>

    <script>
    import { createEventDispatcher } from "svelte";


        // export let filter;

        const dispatch = createEventDispatcher();
        const filter=(e)=>{
            // dispath an event
        dispatch("filter",e.target.value);
        }
    </script>