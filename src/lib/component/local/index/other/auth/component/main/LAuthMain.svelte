<script lang="ts">
	import MariLogoSvg from '$lib/asset/image/svg/MariLogoSvg.svelte';
	import DaisyUiButton from '$lib/component/library/daisyui/button/DaisyUiButton.svelte';
	import DaisyUiCard from '$lib/component/library/daisyui/card/DaisyUiCard.svelte';
	import DaisyUiModalBox from '$lib/component/library/daisyui/modal/box/DaisyUiModalBox.svelte';
	import DaisyUiModal from '$lib/component/library/daisyui/modal/DaisyUiModal.svelte';
	import DaisyUiTableBody from '$lib/component/library/daisyui/table/body/DaisyUiTableBody.svelte';
	import DaisyUiTable from '$lib/component/library/daisyui/table/DaisyUiTable.svelte';
	import DaisyUiTableHeader from '$lib/component/library/daisyui/table/head/DaisyUiTableHeader.svelte';
	import LucideKey from '$lib/component/library/lucide/LucideKey.svelte';
</script>

<section class="mt-28 flex flex-col items-center gap-10">
	<DaisyUiCard className="w-56 p-4 cursor">
		<figure>
			<MariLogoSvg className=" size-44" />
		</figure>
	</DaisyUiCard>

	<label for="my_modal_6" class="d-btn d-btn-primary w-56 gap-5 p-4">
		<LucideKey />
		Beg For Access
	</label>

	<DaisyUiModal groupName="my_modal_6">
		<DaisyUiModalBox groupName="my_modal_6">
			<div class="flex flex-col gap-5">
				<h1 class="text-2xl font-extrabold">War Machine Specs</h1>
				<DaisyUiTable>
					<DaisyUiTableHeader>
						<tr>
							<th> No. </th>
							<th> Key </th>
							<th> Value </th>
						</tr>
					</DaisyUiTableHeader>
					<DaisyUiTableBody>
						<tr>
							<td>1.</td>
							<td>Hostname</td>
							<td>Map</td>
						</tr>
					</DaisyUiTableBody>
				</DaisyUiTable>
			</div>
		</DaisyUiModalBox>
	</DaisyUiModal>
</section>
