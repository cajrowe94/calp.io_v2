<template>
	<div class="work-view">
		<!-- Heading -->
		<div class="work-header">
			<h1>Work</h1>
			<p>List of projects I've worked on</p>
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
						<th>Tech stack</th>
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
						<td>
							<span
								v-if="item.link"
								class="project-link"
							>
								<a
									:href="item.link"
									target="_blank"
								>
									{{ item.name }}
								</a>

								<svg class="external-link-icon" width="19" height="21" fill="none" viewBox="0 0 24 24">
									<path stroke="#29e000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 15.25V6.75H8.75"/>
									<path stroke="#29e000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7L6.75 17.25"/>
								</svg>
							</span>

							<span v-else>
								{{ item.name }}
							</span>
						</td>

						<!-- Tech -->
						<td>
							<span
								class="item-tech"
								v-for="(tech, i) in item.tech"
								:key="i"
							>
								{{ tech }}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
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