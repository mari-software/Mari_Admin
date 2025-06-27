<script lang="ts">
    let { className, href, children  } = $props<{
        className?: string;
        href: string;
        children: () => void;
    }>();
</script>

<a class="d-link {className}" href={href}>{@render children()}</a>