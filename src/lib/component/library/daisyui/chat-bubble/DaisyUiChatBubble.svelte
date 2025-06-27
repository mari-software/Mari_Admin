<script lang="ts">
    // Import the fly transition and an easing function
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing'; // A good easing for a subtle 'pop' effect

    let { position, children, className } = $props<{
        position: 'start' | 'end';
        className?: string;
        children: () => void;
    }>();

    const popTransition = {
        delay: 0,
        duration: 250, 
        easing: cubicOut,
        y: 3,      
        opacity: 0,
        scale: 0.9  
    };
</script>

<div
    class="d-chat d-chat-{position} {className}"
    in:fly={popTransition}  out:fly={popTransition} >
    {@render children()}
</div>