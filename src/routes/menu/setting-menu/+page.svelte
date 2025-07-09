<script lang="ts">
	import DaisyUiTabsContent from '$lib/component/library/daisyui/tabs/content/DaisyUiTabsContent.svelte';
	import DaisyUiTabsTab from '$lib/component/library/daisyui/tabs/tab/DaisyUiTabsTab.svelte';
	import { MariAdminAppTabContent } from '$lib/model/data/tabcontent.data';
</script>


{#each MariAdminAppTabContent as { tabName, arialLabel, component, icon }, index}

	<DaisyUiTabsTab tabName={tabName}  checked={index === 0} />
	<DaisyUiTabsContent className="border-base-300 bg-base-100 p-10">
		<svelte:component this={component} />
	</DaisyUiTabsContent>
{/each}
