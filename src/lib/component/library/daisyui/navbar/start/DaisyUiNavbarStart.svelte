<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<div class="d-navbar-start {className}" data-tauri-drag-region>
	{@render children()}
</div>
