<template>
	<main>
		<!--- Layout Left Slot --->
		<div class="layout-left-slot">
			<slot name="layoutLeft"></slot>
		</div>
		
		<!--- Layout Center Slot --->
		<div class="layout-center-slot">
			<slot name="layoutCenter"></slot>
		</div>

		<!--- Layout Right Slot --->
		<div class="layout-right-slot">
			<slot name="layoutRight"></slot>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'Layout',
	}
</script>