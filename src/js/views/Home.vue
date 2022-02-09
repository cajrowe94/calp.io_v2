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
        <div id="about" style="height: 800px; background: red; margin: 20px 0px;">about</div>
        <div id="experience" style="height: 800px; background: red; margin: 20px 0px;">experience</div>
        <div id="work" style="height: 800px; background: red; margin: 20px 0px;">work</div>
        <div  id="contact" style="height: 800px; background: red; margin: 20px 0px;">contact</div>
      </template>

      <!-- Left slot -->
      <template v-slot:layout_right>
        <h1>Right slot</h1>
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
