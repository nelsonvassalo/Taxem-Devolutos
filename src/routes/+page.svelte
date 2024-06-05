<script>
	import { onMount } from 'svelte';
	import Map from '../lib/components/Map.svelte';

	import { Geolocation } from '@capacitor/geolocation';
	import { Motion } from '@capacitor/motion';

	onMount(async () => {
		const coordinates = await Geolocation.getCurrentPosition();
		console.log('Current', coordinates);

		await DeviceMotionEvent.requestPermission();

		const accel = Motion.addListener('accel', (event) => {
			console.log('Accel', event);
		});
	});
</script>

<Map />
