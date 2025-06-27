<script lang="ts">
	let { effect, className } = $props<{
        effect?: 'ping' | 'bounce';
		className?: string;
	}>();
</script>

<div class="inline-grid *:[grid-area:1/1]">
    <div class="d-status {className} animate-{effect}"></div>
    
    {#if effect == 'ping'}
    <div class="d-status {className}"></div>
    {/if}
</div>