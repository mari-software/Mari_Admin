<script lang="ts">
	import GIndexBreadCrumb from '$lib/component/global/index/component/GIndexBreadCrumb.svelte';
	import GIndexFooter from '$lib/component/global/index/component/GIndexFooter.svelte';
	import GIndexToolBar from '$lib/component/global/index/component/GIndexToolBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<section class="m-app">
	<section class="toolbar">
		<GIndexToolBar />
	</section>
	<main class="m-main">
		{@render children()}
	</main>
	<section>
		<GIndexFooter />
	</section>
</section>


