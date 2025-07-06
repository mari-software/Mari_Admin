<script lang="ts">
	import DaisyUiTabContent from '$lib/component/library/daisyui/tab/tab-contents/DaisyUiTabContent.svelte';
	import DaisyUiTabInputButton from '$lib/component/library/daisyui/tab/tabInputButton/DaisyUiTabInputButton.svelte';
	import { MariAdminAppTabContent } from '$lib/model/data/tabcontent.data';
</script>


{#each MariAdminAppTabContent as { tabName, arialLabel, component, icon }, index}
	<DaisyUiTabInputButton tabName={tabName} ariaLabel={arialLabel} checked={index === 0} />
	<DaisyUiTabContent className="border-base-300 bg-base-100 p-10">
		<svelte:component this={component} />
	</DaisyUiTabContent>
{/each}
