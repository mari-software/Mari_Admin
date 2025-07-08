<script lang="ts">
	import { ApplicationTypeEnum } from '$lib/model/enum/application.enum';

	let { appType, className, children } = $props<{
		appType: ApplicationTypeEnum;
		className?: string;
		children: () => void;
	}>();
</script>

<div
	class="d-toast d-toast-top d-toast-right top-20 z-32 {className} {appType ==
	ApplicationTypeEnum.DESKTOP
		? ' top-20 z-32'
		: ''}"
>
	{@render children()}
</div>
