<script lang="ts">
	import DaisyUiLabel from '../../label/DaisyUiLabel.svelte';

	let {
		drawerName,
		className,
		labelClassName,
		drawerClassName,
		children
	} = $props<{
		drawerName: string;
		className?: string;
		labelClassName?: string;
		drawerClassName?: string;

		children: () => void;
	}>();
</script>

<div class="d-drawer-side {className}">
	<DaisyUiLabel
		forText={drawerName}
		className="d-drawer-overlay {labelClassName}"
	></DaisyUiLabel>
	<ul
		class="d-menu bg-base-200 text-base-content min-h-full {drawerClassName}"
	>
		{@render children()}
	</ul>
</div>
