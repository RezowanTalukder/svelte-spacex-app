<script>
	import LaunchPads from '../components/LaunchPads.svelte';
	import { launchpads, getLaunchPads } from '../spacex-store';
	var resultlaunchpad = [];
	getLaunchPads();

	$: {
		resultlaunchpad = [...$launchpads];
	}
</script>

<svelte:head>
	<title>Launch Pads</title>
</svelte:head>

<h5 class="text-2xl text-center my-8 uppercase">Click on Launchpads to see its Locations</h5>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each resultlaunchpad as launch_pad}
		<LaunchPads {launch_pad} />
	{/each}
</div>
