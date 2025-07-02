<script lang="ts">
	let { effect, className, children } = $props<{
		effect?: 'zebra';
		className?: string;
		children: () => void;
	}>();
</script>

<table class="d-table d-table-{effect} shadow-md {className}">
	{@render children()}
</table>
