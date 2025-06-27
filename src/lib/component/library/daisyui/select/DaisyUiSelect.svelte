<script lang="ts">
    let { children, className, optionHeader } = $props<{
        children?: () => void;
        className?: string;
        optionHeader?: string;
    }>();
</script>

<select class="d-select {className}">
  <option disabled selected>{optionHeader}</option>
    {@render children()}
</select>