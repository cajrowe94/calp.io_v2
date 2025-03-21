<template>
  <div class="view home">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Layout -->
    <Layout class="layout-home">
      <!-- Left slot -->
      <template v-slot:layout_left>
        <Links :links="anchor_links" />
      </template>

      <!-- Center slot -->
      <template v-slot:layout_center>
        <!-- Introduction -->
        <div
          id="intro"
          class="full-screen-height center-content"
        >
          <div
            class="section-content"
            data-theme="theme-light"
          >
            <p class="dark-gray m-0">Hey, my name is</p>
            <h1>Caleb Rowe</h1>
            <p class="dark-gray">
              I'm a software engineer who enjoys building things for the internet.
            </p>
          </div>
        </div>

        <!-- About -->
        <section id="about">
          <div
            class="section-content"
            data-theme="theme-steel"
          >
            <Header>About</Header>
            <div>
                <div class="about-text">
                  <div class="about-image">
                  <img
                    src="../../assets/images/profile_photo.jpeg"
                    alt="Picture of Caleb Rowe"
                    width="200"
                    height="200"
                  >
                </div>
                <p>
                  Hi! My name is Caleb and I'm a software engineer based out of Indiana, USA. I currently 
                  work at a <a href="https://hdmz.com" target="_blank">digital marketing agency</a> 
                  where I build and maintain sites for various companies 
                  within the biotech industry.
                  <br>
                  <br>
                  I specialize in frontend development, but I love to tackle any task throughout 
                  the stack. I've recently been working with <a href="https://symfony.com/" target="_blank">Symfony</a> 
                  and learning API design and development with <a href="https://expressjs.com/" target="_blank">Express</a> 
                  and <a href="https://nodejs.org/en/" target="_blank">Node</a>.
                  <br>
                  <br>
                  ADA compliance and Google's Core Web Vitals have recently become a hot topic at work, so 
                  learning to build accessible and performant websites is another ongoing study for me.
                  <br>
                  <br>
                  Here's some more technologies I've been working with lately:
                </p>
                <ul class="gray-marker tech-stack-list">
                  <li>Nuxt</li>
                  <li>React</li>
                  <li>Stimulus JS</li>
                  <li>Webpack</li>
                  <li>Mapbox</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Experience -->
        <section id="experience">
          <div
            class="section-content"
            data-theme="theme-dark"
          >
            <Header position="right">Experience</Header>
            <ExperienceAccordion />
          </div>
        </section>

        <!-- Work -->
        <section id="work">
          <div
            class="section-content"
            data-theme="theme-steel"
          >
            <Header>Recent&nbsp;work</Header>

            <!-- List of work items -->
            <div class="work-items-container">
              <!-- MyOme -->
              <a
                href="https://www.myome.com/"
                target="_blank"
                class="work-item"
              >
                <div class="work-item-content">
                  <div class="work-item-header">
                    <div>
                      <p class="project-name">MyOme</p>
                      <p class="project-role">Technical Lead</p>
                    </div>
                    <div>
                      <img
                        alt="External link icon"
                        src="../../assets/icons/external_link.svg"
                        class="external-link-icon"
                        width="19"
                        height="21"
                      />
                    </div>
                  </div>
                  <div class="work-item-body">
                    Technical lead on a site rebuild for a bioinformatics company.
                  </div>
                  <div class="work-item-footer">
                    <p class="project-tech">
                      <span>Nuxt</span>
                      <span>SCSS</span>
                      <span>Vercel</span>
                    </p>
                  </div>
                </div>
              </a>

              <!-- GRS -->
              <a
                href="https://researchscholars.gilead.com/"
                target="_blank"
                class="work-item"
              >
                <div class="work-item-content">
                  <div class="work-item-header">
                    <div>
                      <p class="project-name">Gilead Research Scholars</p>
                      <p class="project-role">Frontend Lead</p>
                    </div>
                    <div>
                      <img
                        alt="External link icon"
                        src="../../assets/icons/external_link.svg"
                        class="external-link-icon"
                        width="19"
                        height="21"
                      />
                    </div>
                  </div>
                  <div class="work-item-body">
                    Frontend development lead for a complete rebuild of Gilead's 
                    therapeutic research marketing website.
                  </div>
                  <div class="work-item-footer">
                    <p class="project-tech">
                      <span>Pimcore</span>
                      <span>StimulusJS</span>
                      <span>Mapbox</span>
                      <span>Twig</span>
                    </p>
                  </div>
                </div>
              </a>

              <!-- HDMZ -->
              <a
                href="https://www.hdmz.com/"
                target="_blank"
                class="work-item"
              >
                <div class="work-item-content">
                  <div class="work-item-header">
                    <div>
                      <p class="project-name">HDMZ</p>
                      <p class="project-role">Technical Lead</p>
                    </div>
                    <div>
                      <img
                        alt="External link icon"
                        src="../../assets/icons/external_link.svg"
                        class="external-link-icon"
                        width="19"
                        height="21"
                      />
                    </div>
                  </div>
                  <div class="work-item-body">
                    Technical lead for a migration of HDMZ's
                    corporate website to Drupal.
                  </div>
                  <div class="work-item-footer">
                    <p class="project-tech">
                      <span>Drupal</span>
                      <span>Twig</span>
                      <span>Paragraphs module</span>
                      <span>Webform module</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <!-- See everything -->
            <div class="text-center mt-3">
              <router-link to="/work">
                See everything I've worked on
              </router-link>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section id="contact">
          <div
            class="section-content"
            data-theme="theme-fun"
          >
            <Header position="center">Contact</Header>
            <div class="text-center">
              <p>
                Need to chat? Send me an email!
              </p>
              <a href="mailto:caleb@calp.io">caleb@calp.io</a>
            </div>
          </div>
        </section>
      </template>
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';
  import Links from '../components/Links.vue';
  import Header from '../components/Header.vue';
  import ExperienceAccordion from '../components/ExperienceAccordion.vue';

  export default {
    name: 'Home',
    components: {
      Navigation,
      Layout,
      Links,
      Header,
      ExperienceAccordion
    },
    data() {
      return {
        anchor_links: [
          {
            name: 'About',
            href: '#about'
          },
          {
            name: 'Experience',
            href: '#experience'
          },
          {
            name: 'Work',
            href: '#work'
          },
          {
            name: 'Contact',
            href: '#contact'
          },
        ]
      }
    },
    mounted() {
      // add a scroll listener for the sections
      // we want to animate stuff the headers and change themes
      let sections = document.querySelectorAll('.section-content');

      if (sections.length) {
        // var appWrapper = document.querySelector('#app');

        window.addEventListener('scroll', () => {
          sections.forEach((section) => {
            // let sectionBottom = section.getBoundingClientRect().bottom;
            // let sectionTop = section.getBoundingClientRect().top;
            // let theme = section.dataset.theme;

            let heading = section.querySelector('.header-container');

            // animate the heading
            if (
              heading &&
              heading.getBoundingClientRect().bottom < window.innerHeight &&
              !heading.classList.contains('in-view')
            ) {
              heading.classList.add('in-view');
            }

            // change the theme
            // leaving this out for now, not sure if I like it
            /*
            if (
              sectionBottom < window.innerHeight &&
              sectionBottom > 0 &&
              sectionTop > 0 &&
              sectionTop < window.innerHeight &&
              theme &&
              !appWrapper.classList.contains(theme)
            ) {
              appWrapper.removeAttribute('class');
              appWrapper.classList.add(theme);
            }
            */
          });
        });
      }
    }
  }
</script>
