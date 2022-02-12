<template>
	<div :class="'header-container ' + position">
		<h2>
			<slot></slot>
		</h2>
		<div class="header-hr">&nbsp;</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			position: {
				type: String,
				default: 'left'
			}
		}
	}
</script>