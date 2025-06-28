<script lang="ts">
	import DaisyUiBreadcrumbs from '$lib/component/library/daisyui/breadcrumbs/DaisyUiBreadcrumbs.svelte';
	import { page } from '$app/state';
	import DaisyUiLink from '$lib/component/library/daisyui/link/DaisyUiLink.svelte';

	let spiltPathArray: string[] = $derived(
		page.url.pathname
			.replace(/^\/|\/$/g, '')
			.split('/')
			.filter(Boolean)
	);

	const homeBreadcrumb = { name: 'home', path: '/' };
</script>

<DaisyUiBreadcrumbs className="px-3 max-w-full">
	<li>
		<DaisyUiLink href={homeBreadcrumb.path}>
			{homeBreadcrumb.name}
		</DaisyUiLink>
	</li>

	{#each spiltPathArray as segment, index}
		{@const fullPathForSegment =
			'/' + spiltPathArray.slice(0, index + 1).join('/')}

		<li>
			<DaisyUiLink href={fullPathForSegment}>
				{segment}
			</DaisyUiLink>
		</li>
	{/each}
</DaisyUiBreadcrumbs>
