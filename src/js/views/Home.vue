<template>
  <div class="view home">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Layout -->
    <Layout>
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
        <div id="about" style="height: 800px; background: red; margin: 20px 0px;">about</div>
        <div id="experience" style="height: 800px; background: blue; margin: 20px 0px;">experience</div>
        <div id="work" style="height: 800px; background: green; margin: 20px 0px;">work</div>
        <div  id="contact" style="height: 800px; background: indigo; margin: 20px 0px;">contact</div>
      </template>
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';
  import AnchorLinks from '../components/AnchorLinks.vue';

  export default {
    name: 'Home',
    components: {
      Navigation,
      Layout,
      AnchorLinks
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
