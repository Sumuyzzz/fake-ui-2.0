<template>
	<button
		class="fake-switch"
		@click="toggle"
		:class="{ 'fake-checked': value }"
	>
		<span></span>
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
	$original-background: rgb(87, 87, 87);
	$checked-background: rgb(255, 70, 70);

	.fake-switch {
		height: $h;
		width: $h * 2;
		border: none;
		background: $original-background;
		border-radius: $h/2;
		position: relative;

		span {
			position: absolute;
			top: 2px;
			left: 2px;
			height: $h2;
			width: $h2;
			background: white;
			border-radius: $h2 / 2;
			transition: all 250ms ease-in-out;
		}

		&.fake-checked {
			background: $checked-background;
			> span {
				left: calc(100% - #{$h2} - 2px);
			}
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