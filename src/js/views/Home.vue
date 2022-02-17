<template>
  <div class="view home">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Layout -->
    <Layout class="layout-home">
      <!-- Left slot -->
      <template v-slot:layout_left>
        <AnchorLinks :links="anchor_links" />
      </template>

      <!-- Center slot -->
      <template v-slot:layout_center>
        <!-- Introduction -->
        <div id="intro" class="full-screen-height center-content">
          <p class="dark-gray m-0">Hey, my name is</p>
          <h1>Caleb Rowe</h1>
          <p class="dark-gray">
            Lorem ipsum dolor sit amet orci facilisi justo ornare blandit arcu vivamus.
            Tellus leo quisque nulla dui fames interdum pulvinar facilisis elementum et 
            mauris turpis hendrerit. Incididunt sodales ma.
          </p>
        </div>

        <!-- About -->
        <section id="about">
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
              <ul>
                <li>Javascript</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Experience -->
        <section id="experience">
          <Header position="right">Experience</Header>
          <ExperienceAccordion />
        </section>

        <!-- Work -->
        <section id="work">
          <Header>Work</Header>
        </section>

        <!-- Contact -->
        <section id="contact">
          <Header position="center">Contact</Header>
          <div class="text-center">
            <p>
              Lorem ipsum dolor sit amet eros erat congue posuere eget ultricies.<br>
              Luctus tempus sollicitudin  erat tellus morbi elementum vel.
            </p>
            <a href="mailto:caleb@calp.io">caleb@calp.io</a>
          </div>
        </section>
      </template>
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';
  import AnchorLinks from '../components/AnchorLinks.vue';
  import Header from '../components/Header.vue';
  import ExperienceAccordion from '../components/ExperienceAccordion.vue';

  export default {
    name: 'Home',
    components: {
      Navigation,
      Layout,
      AnchorLinks,
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
