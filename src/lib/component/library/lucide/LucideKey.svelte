<script lang="ts">
	let { className, strokeWidth } = $props<{
		className?: string;
		strokeWidth?: number;
	}>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth || 2}
	stroke-linecap="round"
	stroke-linejoin="round"
	class="lucide lucide-key-icon lucide-key {className}"
	><path
		d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
	/><path d="m21 2-9.6 9.6" /><circle
		cx="7.5"
		cy="15.5"
		r="5.5"
	/></svg
>
