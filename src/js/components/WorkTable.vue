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

								<img
									alt="External link icon"
									src="../../assets/icons/external_link.svg"
									class="external-link-icon"
									width="19"
									height="21"
								/>
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