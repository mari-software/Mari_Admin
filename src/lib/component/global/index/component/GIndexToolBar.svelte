<script lang="ts">
	import { onMount } from 'svelte';
	import DaisyUiNavbar from '$lib/component/library/daisyui/navbar/DaisyUiNavbar.svelte';
	import DaisyUiNavbarStart from '$lib/component/library/daisyui/navbar/start/DaisyUiNavbarStart.svelte';
	import DaisyUiDropdown from '$lib/component/library/daisyui/dropdown/DaisyUiDropdown.svelte';
	import DaisyUiDropdownButton from '$lib/component/library/daisyui/dropdown/button/DaisyUiDropdownButton.svelte';
	import LucideMenu from '$lib/component/library/lucide/LucideMenu.svelte';
	import DaisyUiDropdownContent from '$lib/component/library/daisyui/dropdown/content/DaisyUiDropdownContent.svelte';
	import DaisyUiButton from '$lib/component/library/daisyui/button/DaisyUiButton.svelte';
	import DaisyUiNavbarEnd from '$lib/component/library/daisyui/navbar/end/DaisyUiNavbarEnd.svelte';
	import LucideMinus from '$lib/component/library/lucide/LucideMinus.svelte';
	import DaisyUiTooltip from '$lib/component/library/daisyui/tooltip/DaisyUiTooltip.svelte';
	import LucideX from '$lib/component/library/lucide/LucideX.svelte';
	import LucidePlus from '$lib/component/library/lucide/LucidePlus.svelte';
	import { getAppVersionTauri } from '$lib/util/tauri/module/information_provider.tauri.util';
	import { goToRoute } from '$lib/util/sveltekit/router.sveltekit.util';
	import { MariAdminMenuAppRoute } from '$lib/model/data/route.data';
	import {
		exitWindow,
		maximizeWindow,
		minimizeWindow
	} from '$lib/util/tauri/module/window_controller.tauri.util';

	let appVersion: string = $state('Loading app version...');

	onMount(async () => {
		appVersion = await getAppVersionTauri();
	});
</script>

<DaisyUiNavbar className="">
	<DaisyUiNavbarStart className="gap-2">
		<DaisyUiDropdown>
			<DaisyUiDropdownButton>
				<LucideMenu />
			</DaisyUiDropdownButton>
			<DaisyUiDropdownContent className="my-2 gap-2">
				{#each MariAdminMenuAppRoute as route}
					<li>
						<DaisyUiButton
							className="d-btn-primary gap-5"
							onClick={() => goToRoute(route.url)}
						>
							<svelte:component this={route.icon} />
							{route.name}
						</DaisyUiButton>
					</li>
				{/each}
				<p class="mt-3 text-center opacity-50">
					version: v{appVersion}
				</p>
			</DaisyUiDropdownContent>
		</DaisyUiDropdown>
		<button
			class="d-btn d-btn-ghost text-xl"
			onclick={() => goToRoute('/')}
		>
			Mari Admin
		</button>
	</DaisyUiNavbarStart>
	<DaisyUiNavbarEnd className="gap-2">
		<DaisyUiTooltip className="d-tooltip-left" tooltipText="Minimize">
			<DaisyUiButton
				className="d-btn-circle "
				onClick={minimizeWindow}
			>
				<LucideMinus />
			</DaisyUiButton>
		</DaisyUiTooltip>
		<DaisyUiTooltip className="d-tooltip-left" tooltipText="Maximize">
			<DaisyUiButton
				className="d-btn-circle"
				onClick={maximizeWindow}
			>
				<LucidePlus />
			</DaisyUiButton>
		</DaisyUiTooltip>
		<DaisyUiTooltip
			className="d-tooltip-left d-tooltip-error"
			tooltipText="Close"
		>
			<DaisyUiButton
				className="d-btn-circle d-btn-error hover:d-btn-error"
				onClick={exitWindow}
			>
				<LucideX />
			</DaisyUiButton>
		</DaisyUiTooltip>
	</DaisyUiNavbarEnd>
</DaisyUiNavbar>
