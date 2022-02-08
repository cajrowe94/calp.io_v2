<template>
	<div class="anchor-links-container">
		<ul class="anchor-links-ul">
			<li
				v-for="link in links"
				:key="link.name"
				class="anchor-link"
			>
				<a :href="link.href">
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
		}
	}
</script>