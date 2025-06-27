<!-- How To -->
<!--
<DaisyUiAlert
	position="bottom"
	show={showAlert}
	className="d-alert-error"
>
	<LucideXCircle />
	<p>Error On Line Number 32.</p>
</DaisyUiAlert>
-->

<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		show = false,
		position,
		className,
		children
	} = $props<{
		show: boolean;
		position?: 'top' | 'bottom';
		className?: string;
		children?: () => void;
	}>();

	const flyYOffset = position === 'top' ? -100 : 100;

	const positionClasses = position === 'top' ? 'top-20' : 'bottom-20';

	const transitionOptions = {
		y: flyYOffset,
		duration: 300,
		opacity: 0
	};
</script>

{#if show}
	<div
		role="alert"
		class="d-alert {className} absolute left-1/2 z-10 w-[70vw] -translate-x-1/2 {positionClasses}"
		in:fly={transitionOptions}
		out:fly={transitionOptions}
	>
		{@render children()}
	</div>
{/if}
