<script lang="ts">
	let { children, className } = $props<{
		children: () => void;
		className?: string;
	}>();
</script>

<ul class="d-menu {className}">
	{@render children()}
</ul>