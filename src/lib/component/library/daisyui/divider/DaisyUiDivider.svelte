<script lang="ts">
    let { position, className, dividerText } = $props<{
        position: 'horizontal' | 'vertical';
        className?: string;
        dividerText?: string;
    }>();
</script>

<div class="d-divider d-divider-{position} {className}">{dividerText}</div>