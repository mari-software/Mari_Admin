<script>
	import DaisyUiCard from '$lib/component/library/daisyui/card/DaisyUiCard.svelte';
	import DaisyUiLink from '$lib/component/library/daisyui/link/DaisyUiLink.svelte';
	import { MariAdminAppRoute } from '$lib/model/data/route.data';
</script>

<div class="d-toast d-toast-top d-toast-right top-20 z-32">
	<div class="d-alert d-alert-info">
		<span>New mail arrived.</span>
	</div>
	<div class="d-alert d-alert-success">
		<span>Message sent successfully.</span>
	</div>
</div>
<main class="m-main p-3 px-8 md:px-10 lg:px-12">
	<section
		class="apps grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each MariAdminAppRoute as route}
			<DaisyUiLink className="" href={route.url}>
				<DaisyUiCard className="text-center py-10 hover:bg-accent">
					<figure>
						<svelte:component this={route.icon} />
					</figure>
					{route.name}
				</DaisyUiCard>
			</DaisyUiLink>
		{/each}
	</section>
</main>
