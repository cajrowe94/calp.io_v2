<template>
  <div class="view work">
    <!-- Navigation -->
    <Navigation :hide_menu="true" />

    <!-- Layout -->
    <Layout class="layout-work">
      <!-- Left slot -->
      <template v-slot:layout_left>
        <Links />
      </template>

      <!-- Center slot -->
      <template v-slot:layout_center>
        <WorkTable />
      </template>
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';
  import Links from '../components/Links.vue';
  import WorkTable from '../components/WorkTable.vue';

  export default {
    name: 'Work',
    components: {
      Navigation,
      Layout,
      Links,
      WorkTable
    },
    data() {
      return {
        
      }
    },
    mounted() {
      window.scrollTo(0, 0);
    }
  }
</script>