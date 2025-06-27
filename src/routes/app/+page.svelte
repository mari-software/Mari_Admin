<script>
	import DaisyUiButton from "$lib/component/library/daisyui/button/DaisyUiButton.svelte";
	import DaisyUiDropdownContent from "$lib/component/library/daisyui/dropdown/content/DaisyUiDropdownContent.svelte";
	import DaisyUiDropdown from "$lib/component/library/daisyui/dropdown/DaisyUiDropdown.svelte";
	import DaisyUiDropdownSummary from "$lib/component/library/daisyui/dropdown/button/DaisyUiDropdownButton.svelte";
	import LucideX from "$lib/component/library/lucide/LucideX.svelte";
	import DaisyUiCheckbox from "$lib/component/library/daisyui/checkbox/DaisyUiCheckbox.svelte";
	import DaisyUiDock from "$lib/component/library/daisyui/dock/DaisyUiDock.svelte";
	import DaisyUiDockItem from "$lib/component/library/daisyui/dock/item/DaisyUiDockItem.svelte";
	import DaisyUiDockItemLabel from "$lib/component/library/daisyui/dock/item/label/DaisyUiDockItemLabel.svelte";

</script>

<DaisyUiCheckbox />

<DaisyUiDock>
    <DaisyUiDockItem dockActive={true}>
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
        <DaisyUiDockItemLabel>
            Hello
        </DaisyUiDockItemLabel>
    </DaisyUiDockItem>

    <DaisyUiDockItem dockActive={false}>
        <LucideX />
        <DaisyUiDockItemLabel>
            Hello
        </DaisyUiDockItemLabel>
    </DaisyUiDockItem>

    <DaisyUiDockItem dockActive={false}>
        <DaisyUiDockItemLabel>
            Hello
        </DaisyUiDockItemLabel>
    </DaisyUiDockItem>
</DaisyUiDock>