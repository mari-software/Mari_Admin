<script lang="ts">
    let { themeValue, className, themeInputName, inputType } = $props<{
        themeValue: string;
        className?: string;
        inputType: string;
        themeInputName?: string;
    }>();
</script> 
 <input
    type={inputType}
    
    name={themeInputName}
    class="theme-controller {className}"
    aria-label={themeValue}
    value={themeValue} />

 