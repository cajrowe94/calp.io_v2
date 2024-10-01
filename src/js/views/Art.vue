<template>
  <div class="view art">
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
            
        </template>
    </Layout>
  </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import Layout from '../components/Layout.vue';
    import Links from '../components/Links.vue';
    
    export default {
        name: 'Art',
        components: {
            Navigation,
            Layout,
            Links
        },
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>