<template>
	<div class="full-screen-height anchor-links-container">
		<!-- Tricksy way for me to get flex to do what I want -->
		<div style="height: 130px;" class="d-none"></div>

		<!-- Links -->
		<ul class="anchor-links-ul p-0">
			<li
				v-for="link in links"
				:key="link.name"
				class="anchor-link"
			>
				<a
					:href="link.href"
					@click="scroll_to"
				>
					{{ link.name }}
				</a>
			</li>
		</ul>

		<!-- Social links -->
		<div class="social-links">
			<!-- Github -->
			<a
				href="https://github.com/cajrowe94"
				target="_blank"
			>
				<img src="../../assets/icons/github-icon.svg">
			</a>

			<!-- Linkedin -->
			<a
				href="https://www.linkedin.com/in/calebrowe94"
				target="_blank"
			>
				<img src="../../assets/icons/linkedin-icon.svg">
			</a>

			<!-- Youtube -->
			<a
				href="https://www.youtube.com/channel/UCtU68pn8gpS72gOd_FGladg"
				target="_blank"
			>
				<img src="../../assets/icons/youtube-icon.svg">
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AnchorLinks',
		props: {
			links: Array,
		},
		methods: {
			scroll_to(event) { // custom scrolling action
				event.preventDefault();

				// grab dat hash
				let hash = (event.target && event.target.hash);
				let element = (hash && document.getElementById(hash.substring(1)));

				if (element) {
					element.scrollIntoView({ // badass vanilla js function
						behavior: 'smooth',
						inline: 'center',
						block: 'center'
					});
				}
			}
		}
	}
</script>