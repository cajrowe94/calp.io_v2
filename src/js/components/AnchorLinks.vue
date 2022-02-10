<template>
	<div class="full-screen-height center-content anchor-links-container">
		<ul class="anchor-links-ul">
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