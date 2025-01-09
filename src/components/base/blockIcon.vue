<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
	icon: {
		type: String,
	},
	iconSize: {
		type: String,
		default: "46px",
	},
	size: {
		type: String,
		default: "70px",
	},
	color: {
		type: String,
		default: "rgba(141, 141, 141, 0.12)",
	},
});
</script>

<template>
	<div
		class="icon__fill"
		:style="{ width: size, height: size, background: color }">
		<svg
			class="icon__svg"
			:style="{ width: iconSize, height: iconSize }">
			<use :xlink:href="`#${icon}`"></use>
		</svg>
	</div>
</template>

<style scoped lang="scss">
.icon {
	&__fill {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		border-radius: 8px;
		box-shadow: -2px 0 32px 0 rgba(103, 45, 45, 0.29);
	}

	//&__svg {
	//}
}
</style>
