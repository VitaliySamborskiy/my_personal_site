<script setup lang="ts"></script>

<template>
	<div class="svg-hexagon__block">
		<svg
			v-for="index in 4"
			:key="index"
			class="svg-hexagon__item">
			<use xlink:href="#hexagon"></use>
		</svg>
	</div>
</template>

<style scoped lang="scss">
.svg-hexagon {
	&__block {
		position: relative;
		width: 300px;
		height: 300px;
	}

	&__item {
		position: absolute;
		height: 181px;
		width: 181px;

		&:nth-child(1) {
			top: 0;
			left: 10%;
		}

		&:nth-child(2) {
			top: 46%;
			left: -17%;
		}

		&:nth-child(3) {
			top: 46%;
			left: 37%;
		}

		&:nth-child(4) {
			top: 92%;
			left: 10%;
		}
	}
}
</style>
