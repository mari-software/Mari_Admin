<script lang="ts">
	let { children, className } = $props<{
		children: () => void;
		className?: string;
	}>();
</script>

<div class="d-card-actions {className}">
	{@render children()}
</div>