<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<!-- name of each tab group should be unique -->
<div class="d-tabs d-tabs-lift {className}">
	{@render children()}
</div>
