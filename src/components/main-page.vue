<script setup lang="ts">
import { ref } from "vue";
import BlockIcon from "@/components/base/blockIcon.vue";

type WiriterObjctType = {
	displayText: string;
	typingSpeed: number;
	charIndex: number;
};

const icons = [
	{
		icon: "typeScript",
		size: "62px",
		iconSize: "34px",
	},
	{
		icon: "css",
	},
	{
		icon: "json",
		size: "30px",
		iconSize: "16px",
	},
	{
		icon: "html",
	},
];

let typeValue = ref<string>("");

const typeWiriter = {
	displayText: " Front-end dev",
	typingSpeed: 400,
	charIndex: 0,
};

function typeText(wiriteText: WiriterObjctType): void {
	if (wiriteText.charIndex < wiriteText.displayText.length) {
		typeValue.value += wiriteText.displayText.charAt(wiriteText.charIndex);
		wiriteText.charIndex += 1;
		setTimeout(() => {
			typeText(typeWiriter);
		}, wiriteText.typingSpeed);
	}
}

typeText(typeWiriter);
</script>

<template>
	<section class="main-page__container">
		<div class="main-page__content">
			<article class="main-page__text-block">
				<h1 class="main-page__title">
					i`m:
					<span class="main-page__dynamic-text">{{ typeValue }}</span>
				</h1>
			</article>
			<article class="main-page__background">
				<BlockIcon
					v-for="(item, index) in icons"
					:key="index"
					:icon="item.icon"
					:size="item.size"
					:iconSize="item.iconSize"
					class="main-page__icon-block"></BlockIcon>
			</article>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import "/src/assets/scss/global/vars";

.main-page {
	&__content {
		margin: 200px auto 0;
		display: flex;
	}

	&__text-block {
		width: 69%;
	}

	&__title {
		margin: 108px auto;
		width: 660px;
	}

	&__dynamic-text {
		color: $red;
		border-right: transparent 3px solid;
		padding-right: 9px;
		animation: blink 0.8s infinite;
	}

	&__background {
		width: 31%;
	}

	@keyframes blink {
		0%,
		49% {
			border-right: transparent 3px solid;
		}

		50%,
		100% {
			border-right: $red 3px solid;
		}
	}
}
</style>
