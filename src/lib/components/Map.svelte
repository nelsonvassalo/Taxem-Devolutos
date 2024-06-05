<script>
	import maplibre from 'maplibre-gl';
	import { onMount } from 'svelte';
	const { AttributionControl, Map } = maplibre;

	let map;
	let mapElem;
	onMount(() => {
		map = new Map({
			container: mapElem,
			style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=idxqQoJW3bs3w0zwyvSq',
			// style: 'assets/map-style.json',
			// style: 'https://api.maptiler.com/maps/streets/style.json',
			center: [-9.148, 38.725],
			zoom: 13,
			attributionControl: false
		});
		// map.addControl(new AttributionControl(), 'bottom-left');

		return () => {
			map.remove();
		};
	});
</script>

<div bind:this={mapElem} class="h-[calc(100vh_-_65px)] w-full"></div>
