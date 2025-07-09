<script lang="ts">
    let { children, className, optionHeader, onChange } = $props<{
        children?: () => void;
        className?: string;
        optionHeader?: string;
        onChange?: (e: Event) => void;
    }>();
</script>

<select class="d-select {className}" onchange={onChange}>
  <option disabled selected>{optionHeader}</option>
    {@render children()}
</select>