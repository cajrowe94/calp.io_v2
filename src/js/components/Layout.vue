<template>
	<main :class="'layout' + (collapse_top ? ' collapse-top' : '')">
		<!--- Layout Left Slot --->
		<div
			v-if="!hide_left_slot"
			class="layout-left-slot"
		>
			<slot name="layout_left"></slot>
		</div>
		
		<!--- Layout Center Slot --->
		<div class="layout-center-slot">
			<slot name="layout_center"></slot>
		</div>

		<!--- Layout Right Slot --->
		<div
			v-if="!hide_right_slot"
			class="layout-right-slot"
		>
			<slot name="layout_right"></slot>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'Layout',
		props: {
			hide_left_slot: Boolean,
			hide_right_slot: Boolean,
			collapse_top: Boolean
		}
	}
</script>