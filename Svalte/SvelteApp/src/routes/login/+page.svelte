<script>
	let user = {
		email:'',
		password:''
	}

	// const formHandler=(e)=>{
	// 	e.preventDefault();
	// 	console.log(user);
	// }

	export let data;
	console.log(data);

</script>


<div class="flex justify-center">
	<form method="post" class="p-4 mt-20 rounded-lg border m-auto">
		<h1 class="text-center text-xl">Login</h1>
		<div class="my-5 w-full">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				class="p-2 rounded w-full border text-sm"
				placeholder="Email Address"
				bind:value={user.email}
				name="email"
			/>
		</div>

		<div class="my-5 w-full">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				class="p-2 rounded w-full border text-sm"
				placeholder="Password"
				name="password"
				bind:value={user.password}
			/>
		</div>

		<div class="my-5 w-full">
			<button type="submit" class="p-2 w-full bg-purple-700 text-white hover:bg-purple-900 rounded">
				Submit
			</button>
		</div>
	</form>
</div>