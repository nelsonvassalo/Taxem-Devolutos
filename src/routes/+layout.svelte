<script>
	import '../scss/index.scss';

	import { defineCustomElements } from '@ionic/pwa-elements/dist/esm/loader';

	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (window) defineCustomElements(window);
	});
</script>

<Header />
<slot />
<Nav />
