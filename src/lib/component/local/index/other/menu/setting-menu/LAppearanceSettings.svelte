<script lang="ts">
	// DaisyUiComponents
	import DaisyUiDivider from '$lib/component/library/daisyui/divider/DaisyUiDivider.svelte';
	import DaisyUiCard from '$lib/component/library/daisyui/card/DaisyUiCard.svelte';
	import DaisyUiSelect from '$lib/component/library/daisyui/select/DaisyUiSelect.svelte';
	import DaisyUiButton from '$lib/component/library/daisyui/button/DaisyUiButton.svelte';
	import DaisyUiDropdownButton from '$lib/component/library/daisyui/dropdown/button/DaisyUiDropdownButton.svelte';
	import DaisyUiDropdownContent from '$lib/component/library/daisyui/dropdown/content/DaisyUiDropdownContent.svelte';
	import DaisyUiDropdown from '$lib/component/library/daisyui/dropdown/DaisyUiDropdown.svelte';
	import DaisyUiInputField from '$lib/component/library/daisyui/inputfield/DaisyUiInputField.svelte';

	// LucideComponents
	import LucideDropDown from '$lib/component/library/lucide/LucideDropDown.svelte';

	// Font Local Storage
	import { fontState } from '$lib/store/state/font.state.svelte';
	import { FontEnum } from '$lib/model/enum/font.enum';
	import { setFontFromLocalStorage } from '$lib/store/safe/local-storage/font.local-storage';

	// Theme Local Storage
	import { themeState } from '$lib/store/state/theme.state.svelte';
	import { setThemeFromLocalStorage } from '$lib/store/safe/local-storage/theme.local-storage';
	import { ThemeEnum } from '$lib/model/enum/theme.enum';

	const themes = $state([
		'light', 'dark', 'cupcake', 'bumblebee','emerald','corporate','synthwave',
		'retro','cyberpunk','valentine','halloween','garden','forest','aqua',
		'lofi','pastel','fantasy','wireframe','black','luxury','dracula','cmyk',
		'autumn','business','acid','lemonade','night','coffee','winter','dim',
		'nord','sunset','caramellatte','abyss','silk'
	]);

	/* const themes = $state(Object.values(ThemeEnum)); */

	// Theme Controller

	let currentTheme = $state('light');

	$effect(() => {
		if (themes.includes(currentTheme)) {
			document.documentElement.setAttribute(
				'data-theme',
				currentTheme
			);
		}
	});

	// Font Controller

	let filteredThemes = $derived(
		currentTheme.trim()
			? themes.filter((t) =>
					t.toLowerCase().includes(currentTheme.toLowerCase())
				)
			: themes
	);

	function handleFontChange(event: Event) {
		const select = event.currentTarget as HTMLSelectElement;
		fontState.font = select.value as FontEnum;
		setFontFromLocalStorage(fontState.font);
	}
</script>

<h1 class="m-6 justify-center text-center text-2xl font-extrabold">
	Apperance Controller
</h1>

<!-- Theme Controller -->

<div class="text-secondary mb-5 max-w-2xl text-lg italic">
	Current Theme: {currentTheme}
</div>

<div class="flex w-full flex-col lg:flex-row">
	<div class="rounded-box grid grow place-items-center">
		<DaisyUiDropdown className="mb-30">
			<DaisyUiDropdownButton className="m-1">
				Theme
				<LucideDropDown />
			</DaisyUiDropdownButton>
			<DaisyUiDropdownContent
				className="bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
			>
				{#each themes.slice(0, 3) as theme}
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="theme-controller d-btn d-btn-sm d-btn-ghost w-full justify-start"
							aria-label={theme}
							value={theme}
							onclick={() => (currentTheme = theme)}
						/>
					</li>
				{/each}
			</DaisyUiDropdownContent>
		</DaisyUiDropdown>

		<div>
			Try other themes:
			<DaisyUiInputField
				inputType="text"
				inputPlaceholderText="Enter a theme"
				maxlength={10}
				className="d-input-bordered theme-controller"
			/>

			{#if currentTheme.trim() && filteredThemes.length > 0}
				<ul
					class="bg-base-200 rounded-box z-99 mt-1 max-h-50 overflow-y-auto shadow"
				>
					{#each filteredThemes as suggestion}
						<li>
							<DaisyUiButton
								onClick={() => (currentTheme = suggestion)}
								className="w-full justify-start"
							>
								{suggestion}
							</DaisyUiButton>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<DaisyUiDivider
		position="horizontal"
		className="d-divider-horizontal"
	/>

	<!-- Font Controller -->

	<DaisyUiCard
		className="rounded-box grid h-32 grow place-items-center"
	>
		Font Controller
		<DaisyUiSelect
			className="d-select-ghost"
			optionHeader="Pick a font"
			onChange={handleFontChange}
		>
			<option value="AdwaitaSans">Adwaita Sans</option>
			<option value="Arvo">Arvo</option>
			<option value="ProtoNerd">ProtoNerd</option>
		</DaisyUiSelect>
	</DaisyUiCard>
</div>
