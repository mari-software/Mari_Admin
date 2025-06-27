<script lang="ts">
	let { effect, className, children } = $props<{
        effect?: 'flip';
		className?: string;
		children: () => void;
	}>();
</script>

<label class="d-swap d-swap-{effect}  {className}">
  <input type="checkbox"  hidden/>
  {@render children()}
</label>