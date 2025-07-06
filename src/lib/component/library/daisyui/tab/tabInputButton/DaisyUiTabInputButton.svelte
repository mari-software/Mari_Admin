<script lang="ts">
    let { tabName, ariaLabel, className, checked } = $props<{
        tabName: string;
        className?: string;
        ariaLabel: string;
        checked?: boolean
    }>();
</script>

<input type="radio" name={tabName} class="d-tab {className}" aria-label={ariaLabel} {checked}/>
<!-- <label for={tabName} class="d-btn peer-checked:btn-primary  d-tab">
    {ariaLabel}
</label> -->

<!-- <input type="radio" id={tabName}  name={tabName} class="d-tab {className}"  aria-label={ariaLabel} />
<label for={tabName} class="d-btn peer-checked:btn-primary d-tab">
  {ariaLabel}
</label> -->