<script setup>
import svgSprite from "/src/components/icons/svgSprite.vue";
import headers from "/src/components/headers.vue";
import mainPage from "/src/components/main-page.vue";
</script>

<template>
	<div>
		<headers></headers>
		<mainPage></mainPage>
		<svgSprite></svgSprite>
	</div>
</template>

<style lang="scss">
@import "/src/assets/scss/global/reset";
@import "/src/assets/scss/global/vars";
@import "/src/assets/scss/global/mixins";
@import "/src/assets/scss/global/fonts";
@import "/src/assets/scss/global/global";
</style>
