<script>
	import DaisyUiKbd from '../library/daisyui/kbd/DaisyUiKbd.svelte';
	import DaisyUiTableBody from '../library/daisyui/table/body/DaisyUiTableBody.svelte';
	import DaisyUiTable from '../library/daisyui/table/DaisyUiTable.svelte';
	import DaisyUiTableHeader from '../library/daisyui/table/head/DaisyUiTableHeader.svelte';
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
			<!-- <tr>
				<td>1.</td>
				<td>Copy</td>
				<td>
					<DaisyUiKbd>ctrl</DaisyUiKbd>
					+
					<DaisyUiKbd>c</DaisyUiKbd>
				</td>
			</tr>
			<tr>
				<td>2.</td>
				<td>Paste</td>
				<td>
					<DaisyUiKbd>ctrl</DaisyUiKbd>
					+
					<DaisyUiKbd>v</DaisyUiKbd>
				</td>
			</tr>
			<tr>
				<td>3.</td>
				<td>Leave</td>
				<td>
					<DaisyUiKbd>esc</DaisyUiKbd>
				</td>
			</tr> -->

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
