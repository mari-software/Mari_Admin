<script>
	import DaisyUiKbd from '$lib/component/library/daisyui/kbd/DaisyUiKbd.svelte';
	import DaisyUiTableBody from '$lib/component/library/daisyui/table/body/DaisyUiTableBody.svelte';
	import DaisyUiTable from '$lib/component/library/daisyui/table/DaisyUiTable.svelte';
	import DaisyUiTableHeader from '$lib/component/library/daisyui/table/head/DaisyUiTableHeader.svelte';
	import { MariAdminAppShortcutKey } from '$lib/model/data/shortcutKey.data';

	let header = $state(['No.', 'Action', 'Shortcut']);
	
</script>

<div class="overflow-x-auto">
	<DaisyUiTable>
		<DaisyUiTableHeader>
			<tr>
				{#each header as title}
				<th>{title}</th>
				{/each}
			</tr>
		</DaisyUiTableHeader>
		<DaisyUiTableBody>

			{#each MariAdminAppShortcutKey as {id, action, keys} }
				<tr>
					<td>{id}.</td>
					<td>{action}</td>
					<td>
						{#each keys as  key, i }
							<DaisyUiKbd>{key}</DaisyUiKbd>
							{#if i < keys.length - 1} + {/if}
						{/each}
					</td>
				</tr>
			{/each}
			
		</DaisyUiTableBody>
	</DaisyUiTable>
</div>
