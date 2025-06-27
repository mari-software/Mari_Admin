<!-- How To -->
<!--
<DaisyUiAvatar >
	<img
		src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp"
		alt="example"
	/>
</DaisyUiAvatar>
-->

<script lang="ts">
	let { className, children } = $props<{
		className?: string;
		children: () => void;
	}>();
</script>

<div class="d-avatar {className}">
	{@render children()}
</div>
