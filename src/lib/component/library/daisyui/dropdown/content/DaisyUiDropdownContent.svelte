<script lang="ts">
	let {   children, className } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<ul class="d-menu d-dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm {className}">
    {@render children()}
</ul>