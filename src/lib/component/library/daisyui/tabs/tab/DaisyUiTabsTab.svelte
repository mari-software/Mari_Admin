<script lang="ts">
	import DaisyUiInputField from '../../inputfield/DaisyUiInputField.svelte';
	import DaisyUiLabel from '../../label/DaisyUiLabel.svelte';

	let { tabName, className, children, checked } = $props<{
		tabName: string;
		className?: string;
		children?: () => void;
		checked?: boolean;
	}>();
</script>

<DaisyUiLabel forText={tabName} className="d-tab {className}" >
	<DaisyUiInputField inputType="radio" nameText={tabName} {checked} />
	{#if children}
	{@render children()}
	{/if}
</DaisyUiLabel>

