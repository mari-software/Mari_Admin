<script>
	import DaisyUiCard from '$lib/component/library/daisyui/card/DaisyUiCard.svelte';
	import DaisyUiLink from '$lib/component/library/daisyui/link/DaisyUiLink.svelte';
	import { MariAdminMenuAppRoute } from '$lib/model/data/route.data';
</script>

<main class="m-main p-3 px-8 md:px-10 lg:px-12">
	<section
		class="apps grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each MariAdminMenuAppRoute as route}
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
