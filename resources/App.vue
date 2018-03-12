<template>
	<div class="app">
		<header>
			<nav-bar></nav-bar>
		</header>
		<component :is="currentComponent" v-bind="items"></component>
	</div>
</template>

<script>
import Index from './components/Index'
import NavBar from './components/NavBar'

export default {
	components: { NavBar, Index },
	props: ['componentName', 'items'],
	computed: {
		currentComponent() {
			return this.componentName
		}
	}
}
</script>

<style lang="scss">
	@import "./assets/sass/app";

	// Developement
	@include debug-view("*", color("blue"), true);

	header {
		background-color: $primary-color;
	}
</style>