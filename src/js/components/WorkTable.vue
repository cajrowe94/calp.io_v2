<template>
	<!-- Heading -->
	<div class="work-header">
		<h2>Work</h2>
		<p>This is a complete list of projects that I've been involved with throughout my career.</p>
	</div>

	<!-- Table -->
	<div class="work-table-container">
		<table class="work-table">

			<!-- Table header -->
			<thead>
				<tr>
					<th>Year</th>
					<th>Where</th>
					<th>Name</th>
					<th>Tech used</th>
				</tr>
			</thead>

			<!-- Table body -->
			<tbody>
				<tr
					v-for="(item, i) in items"
					:key="i"
					class="work-item-row"
				>
					<!-- Year -->
					<td>{{ item.year }}</td>

					<!-- Company -->
					<td>{{ item.company }}</td>

					<!-- Name -->
					<td>{{ item.name }}</td>

					<!-- Tech -->
					<td>{{ item.tech }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import workData from '../data/work_data.js';

	export default {
		name: 'WorkTable',
		data() {
			return {
				'items': workData.items,
			}
		}
	}
</script>