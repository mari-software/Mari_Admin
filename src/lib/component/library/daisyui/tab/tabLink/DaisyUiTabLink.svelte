<script lang="ts">
    let { tabName, ariaLabel, className } = $props<{
        tabName: string;
        className?: string;
        ariaLabel: string;
    }>();
</script>

<input type="radio" name={tabName} class="d-tab {className}" aria-label={ariaLabel} />