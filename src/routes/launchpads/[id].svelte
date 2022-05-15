<script context="module">
	import { getLaunchpadByID } from '../../spacex-store';
	export async function load({ params }) {
		let id = params.id;
		const launchpad = await getLaunchpadByID(id);
		return { props: { launchpad } };
	}
</script>

<script>
	import TomTomMap from '../../components/TomTomMap.svelte';
	export let launchpad;
</script>

<svelte:head>
	<title>Launchpad - {launchpad.name}</title>
</svelte:head>
<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{launchpad.name}</h1>
	<TomTomMap {launchpad} />
</div>
