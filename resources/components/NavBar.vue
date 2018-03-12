<template>
	<nav>
		<button class="sidenav-trigger wave" @click="showSidenav">
			<i class="material-icons">menu</i>
		</button>
		<div class="sidenav" v-if="isDisplay">
			Hello
		</div>
		<ul class="nav-items right">
			<li v-for="link in links">
				<a :href="link.ref">{{ link.name }}</a>
			</li>
		</ul>
		<div class="brand">
			Brand
		</div>
	</nav>
</template>

<script>
	export default {
	  data() {
	    return {
	      links: [
	        { name: 'Link1', ref: '#link1' },
	        { name: 'Link2', ref: '#link2' }
	      ],
        isDisplay: false
	    }
	  },
    methods: {
      showSidenav: function () {
        this.isDisplay = this.isDisplay !== true;
      }
    }
	}
</script>

<style lang="scss">
	nav {
		display: flex;
		.sidenav-trigger {
			padding: 1rem;
			background: none;
			border: none;
			cursor: pointer;
			i { color: color('shades', 'white'); }
			&:hover > i { color: $secondary-color; }
		}
		.nav-items {
			display: none;
		}
		.sidenav {
			position: absolute;
			top: 0;right: 0;
			z-index: 1000;
			color: white;
		}
		.brand {
			left: 50%;
			transform-origin: center;
			transform: translateX(-50%);
			margin: 0 auto;
			padding: 4px 0;
			text-decoration: none;
			color: white;
			position: absolute;
			font-size: 36px;
		}
	}
</style>