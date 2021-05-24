<template>
	<button
		class="fake-switch"
		@click="toggle"
		:class="{ 'fake-checked': value }"
	>
		<span class="fake-loadingIndicator"></span>
	</button>
</template>

<script>
	export default {
		props: {
			value: Boolean,
		},
		setup(props, context) {
			const toggle = () => {
				context.emit("update:value", !props.value);
			};
			return { toggle };
		},
	};
</script>

<style lang="scss" >
	$h: 22px;
	$h2: $h - 5px;
	$original-background: rgb(55, 0, 255);
	$checked-background: rgb(255, 0, 0);

	.fake-switch {
		height: $h;
		width: $h * 2;
		border: 1px solid rgb(210, 210, 210);
		background: $original-background;
		border-radius: $h/2;
		position: relative;

		span {
			position: absolute;
			top: 1px;
			left: 1px;
			height: $h2;
			width: $h2;
			background: white;
			border-radius: $h2 / 2;
		}

		&.fake-checked {
			background: $checked-background;
		}

		&.fake-checked > span {
			left: calc(100% - #{$h2} - 2px);
			transition: all 250ms;
		}

		&.fake-active {
			> span {
				width: $h2 + 4px;
			}
		}

		&.fake-checked:active {
			> span {
				width: $h2 + 4px;
				margin-left: -4px;
			}
		}
	}
</style>