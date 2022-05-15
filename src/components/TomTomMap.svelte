<script>
	import tt from '@tomtom-international/web-sdk-maps';
	import '@tomtom-international/web-sdk-maps/dist/maps.css';
	import { onMount } from 'svelte';
	let mapElement;
	let map;
	export let launchpad;

	onMount(() => {
		map = tt.map({
			key: 'B59ZUgeXMr0jeYClV2aTNGxrsUu3mQC9',
			container: mapElement,
			stylesVisibility: {
				trafficIncidents: true,
				trafficFlow: true
			},
			center: [launchpad.longitude, launchpad.latitude],
			zoom: 6
		});
	});
</script>

<div>
	<p>latitude: {launchpad.latitude}</p>
	<p>longitude: {launchpad.longitude}</p>
</div>

<div class="h-64 map" bind:this={mapElement} />
