<template>
	<nav id="nav" class="navigation">
		<div class="navigation-spacer"></div>
		<div class="content">
			<a
				href="/"
				class="navigation-logo"
			>
			cr
			</a>
			<button
				id="menu-button"
				:class="'hamburger hamburger--collapse ' + (isActive ? 'is-active' : '')"
				type="button"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navigation',
		data() {
			return {
				isActive: false,
			}
		},
		mounted() {
			var self = this;
			let menuButton = document.querySelector('#menu-button');

			menuButton.addEventListener('click', function() {
				self.isActive = !self.isActive;
			});
		}
	}
</script>