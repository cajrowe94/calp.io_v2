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
        <div id="intro" class="full-screen-height center-content">
          <p class="dark-gray m-0">Hey, my name is</p>
          <h1>Caleb Rowe</h1>
          <p class="dark-gray">
            I'm a full stack web dev who enjoys building things for the internet.
          </p>
        </div>

        <!-- About -->
        <section id="about">
          <div class="section-content">
            <Header>About</Header>
            <div>
                <div class="about-text">
                  <div class="about-image">
                  <img
                    src="../../assets/images/profile_photo.jpeg"
                    alt="Caleb Rowe"
                    width="200"
                    height="200"
                  >
                </div>
                <p>
                  Lorem ipsum dolor sit amet fringilla mauris dapibus ultrices auctor gravida nullam 
                  egestas suspendisse. Magna ac arcu auctor gravida nullam egestas suspendisse. Magna ac arcu auctor
                  Lorem ipsum dolor sit amet fringilla mauris dapibus ultrices auctor gravida nullam egestas
                  suspendisse.
                  <br>
                  <br>
                  Magna ac arcu auctor gravida nullam egestas suspendisse. Magna ac arcu auctor
                  <br>
                  <br>
                  Lorem ipsum dolem
                </p>
                <ul class="gray-marker">
                  <li>JS</li>
                  <li>PHP</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Experience -->
        <section id="experience">
          <div class="section-content">
            <Header position="right">Experience</Header>
            <ExperienceAccordion />
          </div>
        </section>

        <!-- Work -->
        <section id="work">
          <div class="section-content">
            <Header>Recent&nbsp;work</Header>

            <!-- List of work items -->
            <div class="work-items-container">

              <!-- Tierra bio -->
              <a
                href="https://proteinplatform.tierrabiosciences.com/"
                target="_blank"
                class="work-item"
              >
                <div class="work-item-content">
                  <div class="work-item-header">
                    <div>
                      <p class="project-name">Tierrabio Protein Platform</p>
                      <p class="project-role">Frontend developer</p>
                    </div>
                    <div>
                      <img
                        src="../../assets/icons/external_link.svg"
                        class="external-link-icon"
                      />
                    </div>
                  </div>
                  <div class="work-item-body">
                    Lorem ipsum dolor sit amet phasellus 
                    orci scelerisque tristique consectetur 
                    sagittis condimentum duis quisque purus.
                  </div>
                  <div class="work-item-footer">
                    <p class="project-tech">
                      <span>Pimcore</span>
                      <span>Twig</span>
                      <span>JS</span>
                      <span>Bootstrap</span>
                      <span>SCSS</span>
                    </p>
                  </div>
                </div>
              </a>

              <!-- Clovis -->
              <a
                href="https://targetedradiotherapy.com/"
                target="_blank"
                class="work-item"
              >
                <div class="work-item-content">
                  <div class="work-item-header">
                    <div>
                      <p class="project-name">Clovis Oncology</p>
                      <p class="project-role">Lead developer</p>
                    </div>
                    <div>
                      <img
                        src="../../assets/icons/external_link.svg"
                        class="external-link-icon"
                      />
                    </div>
                  </div>
                  <div class="work-item-body">
                    Lorem ipsum dolor sit amet phasellus 
                    orci scelerisque tristique consectetur 
                    sagittis condimentum duis quisque purus.
                  </div>
                  <div class="work-item-footer">
                    <p class="project-tech">
                      <span>Wordpress</span>
                      <span>ACF</span>
                      <span>Bootstrap</span>
                      <span>JS</span>
                      <span>SCSS</span>
                    </p>
                  </div>
                </div>
              </a>

              <!-- Innoviva -->
              <a
                href="https://inva.com/"
                target="_blank"
                class="work-item"
              >
                <div class="work-item-content">
                  <div class="work-item-header">
                    <div>
                      <p class="project-name">Innoviva</p>
                      <p class="project-role">Lead developer</p>
                    </div>
                    <div>
                      <img
                        src="../../assets/icons/external_link.svg"
                        class="external-link-icon"
                      />
                    </div>
                  </div>
                  <div class="work-item-body">
                    Lorem ipsum dolor sit amet phasellus 
                    orci scelerisque tristique consectetur 
                    sagittis condimentum duis quisque purus.
                  </div>
                  <div class="work-item-footer">
                    <p class="project-tech">
                      <span>Wordpress</span>
                      <span>Exponent Theme</span>
                      <span>JS</span>
                      <span>SCSS</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <!-- See everything -->
            <div class="text-center mt-3">
              <a href="/all-work">See everything I've worked on</a>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section id="contact">
          <div class="section-content">
            <Header position="center">Contact</Header>
            <div class="text-center">
              <p>
                Got somethin' you wanna say to me? Send me an email!
                My inbox is always open. I'm not actually sure how to close it. ¯\_(ツ)_/¯
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
    }
  }
</script>
