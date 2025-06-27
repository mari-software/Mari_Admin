<script lang="ts">
    let { className, children ,backgroundImage} = $props<{
        className?: string;
        children: () => void;
        backgroundImage?: string
    }>();
</script>

<div class="d-hero bg-base-200 min-h-screen" style="background-image: url({backgroundImage});">
    {@render children()}
</div>

