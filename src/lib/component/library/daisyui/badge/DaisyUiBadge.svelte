<!-- How To -->
<!--
<DaisyUiBadge className="d-badge-primary">Hello</DaisyUiBadge>
-->

<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<div class="d-badge {className}">
	{@render children()}
</div>
