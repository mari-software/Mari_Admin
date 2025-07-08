<script lang="ts">
	import DaisyUiTab from '$lib/component/library/daisyui/tabs/DaisyUiTab.svelte';

	let { children } = $props();
</script>

<DaisyUiTab className="d-tabs-lift">
	{@render children()}
</DaisyUiTab>
