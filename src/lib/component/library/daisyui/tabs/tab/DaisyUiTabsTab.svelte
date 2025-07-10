<script lang="ts">
	import DaisyUiInputField from '../../inputfield/DaisyUiInputField.svelte';
	import DaisyUiLabel from '../../label/DaisyUiLabel.svelte';

	let { tabName, className, children, checked, ariaLabel } = $props<{
		tabName: string;
		className?: string;
		children?: () => void;
		checked?: boolean;
		ariaLabel?: string;
	}>();
</script>

<DaisyUiLabel forText={tabName} className="d-tab {className}" >
	<DaisyUiInputField inputType="radio" nameText={tabName} ariaLabel={ariaLabel} {checked} rawStyle/>
	{#if children}
	{@render children()}
	{/if}
</DaisyUiLabel>

