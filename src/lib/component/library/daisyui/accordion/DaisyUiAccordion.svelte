<script lang="ts">
	import DaisyUiInputField from '../inputfield/DaisyUiInputField.svelte';

	let {
		title,
		titleClass,
		content,
		contentClass,
		icon,
		groupName,
		className
	} = $props<{
		title: string;
		content: string;
		titleClass?: string;
		contentClass?: string;
		icon: 'arrow' | 'plus';
		groupName?: string;
		className?: string;
	}>();
</script>

<div class="d-collapse d-collapse-{icon} {className}">
	<DaisyUiInputField inputType="radio" nameText={groupName} />
	<div class="d-collapse-title {titleClass}">
		{title}
	</div>
	<div class="d-collapse-content {contentClass}">
		{content}
	</div>
</div>
