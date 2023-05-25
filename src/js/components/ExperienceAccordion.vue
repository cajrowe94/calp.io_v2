<template>
	<div class="accordion-container">
		<div class="accordion-items">

			<!-- HDMZ -->
			<div class="accordion-item active">
				<div class="accordion-item-header">
					<div>
						<p class="title">
							<span class="job-title">Frontend Engineer</span>
							<span class="at">&commat;</span>
							<span class="company-name">HDMZ</span>
						</p>
						<p class="dates">Feb 2021 - Present : Remote</p>
					</div>
				</div>
				<div class="accordion-item-body">
					<ul class="white white-marker">
						<li>
							Build and maintain websites for various clients 
							within the biotech industry.
						</li>
						<li>
							Use modern frameworks, libraries, and content management systems such as 
							Pimcore, Wordpress, Vue, Symfony, and Bootstrap.
						</li>
						<li>
							Write cross browser and ADA compliant code that allows for ease of use across 
							all users and devices.
						</li>
					</ul>
				</div>
			</div>

			<!-- myhELO -->
			<div class="accordion-item">
				<div class="accordion-item-header">
					<div>
						<p class="title">
							<span class="job-title">Frontend Engineer</span>
							<span class="at">&commat;</span>
							<span class="company-name">myhELO</span>
						</p>
						<p class="dates">Jan 2020 - Feb 2021 : Fishers, IN</p>
					</div>
				</div>
				<div class="accordion-item-body">
					<ul class="white">
						<li>
							Design and build new features for myhELO, a digital health record application.
						</li>
						<li>
							Use a homebrewed, reactive JS framework to build performant frontend solutions 
							for users.
						</li>
						<li>
							Assist in API development using PHP.
						</li>
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
				</div>
				<div class="accordion-item-body">
					<ul class="white">
						<li>
							Build new pages and update content for a small business eCommerce site.
						</li>
						<li>
							Implement analytics and tracking solutions using Google Tag Manager 
							and Google Analytics.
						</li>
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
			return {}
		},
		mounted() {
			// add a click listener for each accordion item
			var items = document.querySelectorAll('.accordion-item');

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