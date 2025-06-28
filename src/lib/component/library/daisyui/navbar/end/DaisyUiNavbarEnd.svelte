<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<div class="d-navbar-end {className}" data-tauri-drag-region>
	{@render children()}
</div>
