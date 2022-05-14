<script>
	import LaunchPads from '../components/LaunchPads.svelte';
</script>

<svelte:head>
	<title>Launch Pads</title>
	<script
		defer
		async
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi5ftCsmbv6mIcLaAeMcLJEgxRdsfRBcE&callback=initMap">
	</script>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Launch Pads Locations</h1>

<div>
	<LaunchPads />
</div>
