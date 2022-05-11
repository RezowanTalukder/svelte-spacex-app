<script>
	import { fade } from 'svelte/transition';
	export let launch;
</script>

<div
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	transition:fade
>
	<h6>{launch.date_local}</h6>
	<img class="h-40 w-40 " src={launch.image} alt={launch.rocket} />
	<h2 class="uppercase text-2xl">{launch.name}</h2>
	<p>{launch.details}</p>
</div>
