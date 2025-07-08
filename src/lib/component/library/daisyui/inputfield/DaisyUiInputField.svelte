<script lang="ts">
	let {
		id,
		className,
		inputPlaceholderText,
		inputType,
		inputPattern,
		inputTitle,
		minLength,
		maxlength,
		nameText,
		value,
		ariaLabel,
		rawStyle
	} = $props<{
		id?: string;
		className?: string;
		inputPlaceholderText?: string;
		inputType?: string;
		inputPattern?: string;
		inputTitle?: string;
		minLength?: number;
		maxlength?: number;
		nameText?: string;
		value?: string;
		ariaLabel?: string;
		rawStyle?: boolean;
	}>();
</script>

{#if rawStyle}
	<input
		{id}
		class={className}
		type={inputType}
		required
		placeholder={inputPlaceholderText}
		pattern={inputPattern}
		minlength={minLength ?? 1}
		maxlength={maxlength ?? 50}
		title={inputTitle}
		name={nameText}
		{value}
		aria-label={ariaLabel}
	/>
{:else}
	<input
		{id}
		class="d-input {className}"
		type={inputType}
		required
		placeholder={inputPlaceholderText}
		pattern={inputPattern}
		minlength={minLength ?? 1}
		maxlength={maxlength ?? 50}
		title={inputTitle}
		name={nameText}
		{value}
		aria-label={ariaLabel}
	/>
{/if}
