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

		<!-- Mobile menu -->
		<div :class="'mobile-menu' + (isActive ? ' open' : '')">
			<div class="social-links">
				
			</div>
			<div class="jump-links">
				<ul>
					<li><a @click="scroll_to" href="#about">About</a></li>
					<li><a @click="scroll_to" href="#experience">Experience</a></li>
					<li><a @click="scroll_to" href="#work">Work</a></li>
					<li><a @click="scroll_to" href="#contact">Contact</a></li>
				</ul>
			</div>
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
				document.querySelector('html').classList.toggle('no-scroll');
			});
		},
		methods: {
			scroll_to(event) { // custom scrolling action
				event.preventDefault();
				document.querySelector('html').classList.remove('no-scroll');

				// grab dat hash
				let hash = (event.target && event.target.hash);
				let element = (hash && document.getElementById(hash.substring(1)));

				if (element) {
					setTimeout(function() {
						element.scrollIntoView({
							behavior: 'smooth',
							inline: 'center',
							block: 'start'
						});
					}, 500);

					this.isActive = false;
				}
			}
		}
	}
</script>