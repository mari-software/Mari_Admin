<script lang="ts">
	import DaisyUiLabel from '../../label/DaisyUiLabel.svelte';

	let { drawerName, className, labelClassName, children } = $props<{
		drawerName: string;
		className?: string;
		labelClassName?: string;

		children: () => void;
	}>();
</script>

<div class="d-drawer-content {className}">
	<!-- Page content here -->
	<DaisyUiLabel
		forText={drawerName}
		className="d-btn {labelClassName} "
	>
		{@render children()}
	</DaisyUiLabel>
</div>
