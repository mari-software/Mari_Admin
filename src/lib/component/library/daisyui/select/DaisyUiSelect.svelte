<script lang="ts">
    let { children, className, optionHeader, onChange, selectedValue } = $props<{
        children?: () => void;
        className?: string;
        optionHeader?: string;
        onChange?: (e: Event) => void;
        selectedValue?: string;

    }>();
</script>

<select class="d-select {className}" value={selectedValue} onchange={onChange}>
  <option disabled selected>{optionHeader}</option>
    {@render children()}
</select>