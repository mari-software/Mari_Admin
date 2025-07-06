<script lang="ts">
	let {
		inputPlaceholderText,
		inputType,
		inputPattern,
		inputTitle,
        className,
		minLength,
		maxlength,
		inputValue = $bindable(),
	} = $props<{
		inputPlaceholderText: string;
		inputType: string;
        className?: string;
		inputPattern?: string;
		inputTitle?: string;
		minLength?: number;
		maxlength?: number;
		inputValue?: string;
	}>();
</script>
	
	<input
		type={inputType}
		required
		placeholder={inputPlaceholderText}
		pattern={inputPattern}
		minlength={minLength ?? 1}
		maxlength={maxlength ?? 5}
		title={inputTitle}
        class="d-input {className}"
		bind:value={inputValue}
	/>

