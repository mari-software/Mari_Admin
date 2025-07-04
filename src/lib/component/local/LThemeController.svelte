<script lang="ts">
	import DaisyUiDivider from '../library/daisyui/divider/DaisyUiDivider.svelte';
	import DaisyUiThemeController from '../library/daisyui/themeController/DaisyUiThemeController.svelte';

	const themes = $state([
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset',
		'caramellatte',
		'abyss',
		'silk'
	]);
</script>

<h1 class="m-6 justify-center text-center text-2xl font-extrabold">
	Theme Controller
</h1>

<div class="flex w-full flex-col lg:flex-row">
	<div class="d-card rounded-box grid grow place-items-center">
		<div class="d-join d-join-vertical">
			{#each themes.slice(0, 5) as theme}
				<DaisyUiThemeController
					inputType="radio"
					className="d-btn theme-controller d-join-item"
					themeInputName="theme-buttons"
					themeValue={theme}
				/>
			{/each}
		</div>
	</div>
	<!-- <div class="d-divider lg:d-divider-horizontal"></div> -->
	<DaisyUiDivider
		position="horizontal"
		className="lg:d-divider-horizontal"
	/>
	<!-- <div class="d-card bg-base-300 rounded-box p-4 text-center transition-colors duration-300">
			<p class="text-lg">This is a preview of the {themes[0]} theme!</p>
		</div> -->
	<div
		class="d-card bg-base-300 rounded-box grid h-32 grow place-items-center"
	>
		fadfasf
	</div>
</div>
