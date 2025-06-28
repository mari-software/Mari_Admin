<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<footer
	class="d-footer bg-base-200 text-base-content shadow-md {className}"
>
	{@render children()}
</footer>
