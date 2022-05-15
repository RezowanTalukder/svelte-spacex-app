<script>
	import { fade } from 'svelte/transition';
	export let launch_pad;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/launchpads/${launch_pad.id}`}
	transition:fade
>
	<h1 class="uppercase text-4xl">{launch_pad.name}</h1>
	<h2 class="uppercase text-xl">{launch_pad.full_name}</h2>
	<p>{launch_pad.region}</p>
	<p>{launch_pad.status}</p>
</a>
