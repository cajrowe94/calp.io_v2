<template>
	<div class="accordion-container">
		<div class="accordion-items">
			<!-- HDMZ -->
			<div class="accordion-item active">
				<div class="accordion-item-header">
					<div>
						<p class="title">
							<span class="job-title">Frontend Developer</span>
							<span class="at">&commat;</span>
							<span class="company-name">HDMZ</span>
						</p>
						<p class="dates">Feb 2021 - Present : Remote</p>
					</div>
					<div class="accordion-arrow">
						<img src="../../assets/icons/accordion_arrow.svg">
					</div>
				</div>
				<div class="accordion-item-body">
					<ul class="white">
						<li>List item</li>
						<li>List item</li>
						<li>List item</li>
					</ul>
				</div>
			</div>
			<!-- myhELO -->
			<div class="accordion-item">
				<div class="accordion-item-header">
					<div>
						<p class="title">
							<span class="job-title">Software Engineer</span>
							<span class="at">&commat;</span>
							<span class="company-name">myhELO</span>
						</p>
						<p class="dates">Jan 2020 - Feb 2021 : Fishers, IN</p>
					</div>
					<div class="accordion-arrow">
						<img src="../../assets/icons/accordion_arrow.svg">
					</div>
				</div>
				<div class="accordion-item-body">
					<ul class="white">
						<li>List item</li>
						<li>List item</li>
						<li>List item</li>
					</ul>
				</div>
			</div>
			<!-- USWS -->
			<div class="accordion-item">
				<div class="accordion-item-header">
					<div>
						<p class="title">
							<span class="job-title">Web Developer</span>
							<span class="at">&commat;</span>
							<span class="company-name">US Water Systems</span>
						</p>
						<p class="dates">April 2019 - Jan 2020 : Indianapolis, IN</p>
					</div>
					<div class="accordion-arrow">
						<img src="../../assets/icons/accordion_arrow.svg">
					</div>
				</div>
				<div class="accordion-item-body">
					<ul class="white">
						<li>List item</li>
						<li>List item</li>
						<li>List item</li>
						<li>List item</li>
						<li>List item</li>
						<li>List item</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ExperienceAccordion',
		data() {
			return {

			}
		},
		mounted() {
			// add a click listener for each accordion item
			var items = document.querySelectorAll('.accordion-item');
			console.log(items);

			items.forEach(item => {
				item.addEventListener('click', () => {
					// first, remove all active items
					if (!item.classList.contains('active')) {
						items.forEach(item => {
							if (item.classList.contains('active')) {
								item.classList.remove('active');
							}
						});

						// now add the active class to clicked item
						item.classList.add('active');
					}
				})
			})
		}
	}
</script>