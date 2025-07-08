<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<div
	class="d-tab-content bg-base-100 border-base-300 p-6 {className}"
>
	{@render children()}
</div>
