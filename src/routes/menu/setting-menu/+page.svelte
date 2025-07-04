<script lang="ts">
	
	import DaisyUiTab from '$lib/component/library/daisyui/tab/DaisyUiTab.svelte';
	import DaisyUiTabContent from '$lib/component/library/daisyui/tab/tab-contents/DaisyUiTabContent.svelte';
	import DaisyUiTabLink from '$lib/component/library/daisyui/tab/tabLink/DaisyUiTabLink.svelte';
	import LSettingTable from '$lib/component/local/LSettingTable.svelte';
	import LThemeController from '$lib/component/local/LThemeController.svelte';

</script>

<DaisyUiTab className="d-tabs-lift d-tabs-border">
	<DaisyUiTabLink
		tabName="my_tabs"
		ariaLabel="Shortcut Keys"
	/>
	<DaisyUiTabContent className="border-base-300 bg-base-100 p-10 justify-center">
		<LSettingTable />
	</DaisyUiTabContent>
	<DaisyUiTabLink tabName="my_tabs" ariaLabel="Theme Controller" />
	<DaisyUiTabContent className="border-base-300 bg-base-100 p-10">
		<LThemeController/>
       
	</DaisyUiTabContent>
	<DaisyUiTabLink tabName="my_tabs" ariaLabel="Tab 3" />
	<DaisyUiTabContent className="border-base-300 bg-base-100 p-10">
		fkldsfsfsf
	</DaisyUiTabContent>
</DaisyUiTab>

