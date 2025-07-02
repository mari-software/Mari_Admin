<script lang="ts">
	import DaisyUiFooterAside from '$lib/component/library/daisyui/footer/aside/DaisyUiFooterAside.svelte';
	import DaisyUiFooter from '$lib/component/library/daisyui/footer/DaisyUiFooter.svelte';
</script>

<DaisyUiFooter className="d-footer-center p-2">
	<DaisyUiFooterAside>
		Copyright © {new Date().getFullYear()} - All right reserved by mari.software
	</DaisyUiFooterAside>
</DaisyUiFooter>
