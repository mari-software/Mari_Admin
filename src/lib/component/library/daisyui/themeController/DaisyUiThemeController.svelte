<script lang="ts">
    let { themeValue, className, themeInputName, inputType, onClick } = $props<{
        themeValue: string;
        className?: string;
        inputType: string;
        onClick?: () => void;
        themeInputName?: string;
    }>();
</script> 
 <input
    type={inputType}
    onclick={onClick}
    name={themeInputName}
    class="theme-controller {className}"
    aria-label={themeValue}
    value={themeValue} />

 