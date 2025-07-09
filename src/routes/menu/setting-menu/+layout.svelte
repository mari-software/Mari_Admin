<script lang="ts">
	import DaisyUiTabs from '$lib/component/library/daisyui/tabs/DaisyUiTabs.svelte';


	let { children } = $props();
</script>

<DaisyUiTabs className="d-tabs-lift">
	{@render children()}
</DaisyUiTabs>
