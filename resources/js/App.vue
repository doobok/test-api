<template>
    <div class="app">
        <Navbar></Navbar>

        <router-view></router-view>

        <Footer></Footer>
    </div>
</template>

<script>

export default {
    name: "app",
    components: {
        Navbar: () => import('./Components/Navbar.vue'),
        Footer: () => import('./Components/Footer.vue')
    },
    mounted: function()
    {
        // From testing, without a brief timeout, it won't work.
        setTimeout(() => this.scrollFix(this.$route.hash), 1);
    },
    methods: {
        scrollFix: function(hashbang)
        {
            location.hash = hashbang;
        }
    }
}
</script>
