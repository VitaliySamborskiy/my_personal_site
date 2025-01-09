<script setup lang="ts">
import { ref } from "vue";
import useSvgHexagon from "./base/useSvgHexagon.vue";

const name = ref<string>("Samborskyi Vitalii");
</script>

<template>
	<header class="header__content header__container">
		<useSvgHexagon class="header__svg"></useSvgHexagon>
		<h2 class="header__title">{{ name }}</h2>
	</header>
</template>

<style lang="scss" scoped>
.header {
	&__content {
		margin: 103px auto 0;
		position: relative;
	}
	&__svg {
		position: absolute;
		top: -525%;
		left: -0.5%;
		z-index: 0;
	}

	&__title {
		margin: 0 auto;
		width: 63%;
		font-size: 35px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
}
</style>
