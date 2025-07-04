<script lang="ts">
	import DaisyUiButton from '$lib/component/library/daisyui/button/DaisyUiButton.svelte';
	import {
		goBackRoute,
		goToRoute
	} from '$lib/util/sveltekit/router.sveltekit.util';

	function handleGoToHome() {
		goToRoute('/');
	}
</script>

<div class="flex h-screen flex-col items-center justify-center gap-5">
	<div class="flex flex-col gap-2">
		<h1 class="text-error text-5xl font-bold">404 Not Found</h1>
		<p class="font-bold opacity-50">Mari_Admin</p>
	</div>
	<div class="flex justify-end gap-5">
		<DaisyUiButton onClick={goBackRoute}>Back</DaisyUiButton>
		<DaisyUiButton className="d-btn-primary" onClick={handleGoToHome}
			>Go To Home</DaisyUiButton
		>
	</div>
</div>
