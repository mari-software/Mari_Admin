<script lang="ts">
 let {children, className, fieldsetLegend} = $props<{
     className?: string;
     children: () => void;
     fieldsetLegend: string
 }>();
</script>

<fieldset class="d-fieldset {className}">
  <legend class="d-fieldset-legend">{fieldsetLegend}</legend>
  {@render children()}
</fieldset>