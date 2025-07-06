<script lang="ts">
  let { labelType, children, className, spanText } = $props<{
      labelType: string;
      children: () => void;
      className?: string;
      spanText: string;

  }>();
  
</script>

<label class="d-{labelType}">
  <span class={className}>{spanText}</span>
 {@render children()}
</label>