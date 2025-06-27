<script lang="ts">
    let {className, children} = $props<{
        className?: string;
        children: () => void;
    }>();
</script>

<footer class="d-footer sm:d-footer-horizontal bg-base-200 text-base-content p-10 {className}">
  {@render children()}
</footer>