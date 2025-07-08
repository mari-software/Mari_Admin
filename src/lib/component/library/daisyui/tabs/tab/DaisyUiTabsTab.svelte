<script lang="ts">
	import DaisyUiInputField from '../../inputfield/DaisyUiInputField.svelte';
	import DaisyUiLabel from '../../label/DaisyUiLabel.svelte';

	let { tabName, className, children } = $props<{
		tabName: string;
		className?: string;
		children?: () => void;
	}>();
</script>

<DaisyUiLabel forText={tabName} className="d-tab {className}">
	<DaisyUiInputField inputType="radio" nameText={tabName} />
	{@render children()}
</DaisyUiLabel>

