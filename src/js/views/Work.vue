<template>
  <div class="view work">
    <!-- Navigation -->
    <Navigation />

    <!-- Layout -->
    <Layout
      class="layout-work"
      :collapse_top="true"
    >
      <!-- Left slot -->
      <template v-slot:layout_left>
        <Links />
      </template>

      <!-- Center slot -->
      <template v-slot:layout_center>
        
      </template>
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';
  import Links from '../components/Links.vue';

  export default {
    name: 'Work',
    components: {
      Navigation,
      Layout,
      Links
    },
    data() {
      return {
        
      }
    }
  }
</script>