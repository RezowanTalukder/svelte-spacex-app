<script>
	import { launches, getLaunches } from '../spacex-store';
	import LaunchCard from '../components/LaunchCard.svelte';
	let searchTerm = '';
	let filteredLaunch = [];
	getLaunches();

	$: {
		if (searchTerm) {
			filteredLaunch = $launches.filter((launch) =>
				launch.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredLaunch = [...$launches];
		}
	}

	getLaunches();
</script>

<svelte:head>
	<title>Launches</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Launches</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Launch"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredLaunch as launch}
		<LaunchCard {launch} />
	{/each}
</div>
