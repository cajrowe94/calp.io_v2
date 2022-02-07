<template>
  <div class="view">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Layout -->
    <Layout>
      <!-- Left slot -->
      <template v-slot:layoutLeft>
        <h1>Left slot</h1>
      </template>

      <!-- Center slot -->
      <template v-slot:layoutCenter>
        <h1>Center slot</h1>
      </template>

      <!-- Left slot -->
      <template v-slot:layoutRight>
        <h1>Right slot</h1>
      </template>
    </Layout>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue';
  import Layout from '../components/Layout.vue';

  export default {
    name: 'Home',
    components: {
      Navigation,
      Layout,
    }
  }
</script>
