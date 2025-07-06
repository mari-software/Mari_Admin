<script lang="ts">
	import DaisyUiTab from '$lib/component/library/daisyui/tab/DaisyUiTab.svelte';

	let { children } = $props();
</script>

<DaisyUiTab className="d-tabs-lift">
	{@render children()}
</DaisyUiTab>
