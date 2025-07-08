<script lang="ts">
	let { children, className } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<div class="d-dropdown {className}">
	{@render children()}
</div>
