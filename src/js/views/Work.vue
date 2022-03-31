<template>
  <div class="view work">
    <!-- Navigation -->
    <Navigation />

    <!-- Layout -->
    <Layout class="layout-work">
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';

  export default {
    name: 'Work',
    components: {
      Navigation,
      Layout
    },
    data() {
      return {
        
      }
    }
  }
</script>