<script>
	import DaisyUiCard from '$lib/component/library/daisyui/card/DaisyUiCard.svelte';
	import DaisyUiLink from '$lib/component/library/daisyui/link/DaisyUiLink.svelte';
	import { MariAdminAppRoute } from '$lib/model/data/route.data';
</script>

<main class="m-main p-3">
	<section class="apps grid grid-cols-3 gap-5 lg:grid-cols-4">
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
