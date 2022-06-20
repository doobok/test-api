<template xmlns="http://www.w3.org/1999/html">
    <section class="header_area">
        <div class="navbar-area bg-white">
            <div class="container relative">
                <div class="row items-center">
                    <div class="w-full">
                        <nav class="flex items-center justify-between py-4 navbar navbar-expand-lg">
                            <a class="navbar-brand mr-5" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-16 text-theme-color" viewBox="0 0 24 24">
                                    <path d="M13.271 9.231l1.581.88 2.502-.846v-1.696c0-2.925-2.445-5.202-5.354-5.202-2.897 0-5.354 2.129-5.354 5.17v7.749c0 .702-.568 1.27-1.27 1.27s-1.271-.568-1.271-1.27v-3.284h-4.105v3.328c0 2.963 2.402 5.365 5.365 5.365 2.937 0 5.323-2.361 5.364-5.288v-7.653c0-.702.569-1.27 1.271-1.27s1.271.568 1.271 1.27v1.477zm6.624 2.772v3.437c0 .702-.569 1.27-1.271 1.27s-1.271-.568-1.271-1.27v-3.372l-2.502.847-1.581-.881v3.344c.025 2.941 2.418 5.317 5.364 5.317 2.963 0 5.365-2.402 5.365-5.365v-3.328h-4.104z"/>
                                </svg>
                            </a>
                            <button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                                <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    <li class="nav-item ml-5 lg:ml-11">
                                        <router-link :to="{ name: 'home' }"  class="page-scroll active" >Home</router-link>
                                    </li>
                                    <li class="nav-item ml-5 lg:ml-11">
                                        <router-link to="#token" @click.native="('#token')">Token</router-link>
                                    </li>
                                    <li class="nav-item ml-5 lg:ml-11">
                                        <router-link to="#register" @click.native="('#register')">User registration</router-link>
                                    </li>
                                    <li class="nav-item ml-5 lg:ml-11">
                                        <router-link to="#users" @click.native="('#users')">Users</router-link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div id="home" class="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
            <div class="hero_shape shape_1">
                <img src="assets/images/shape/shape-1.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_2">
                <img src="assets/images/shape/shape-2.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_3">
                <img src="assets/images/shape/shape-3.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_4">
                <img src="assets/images/shape/shape-4.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_6">
                <img src="assets/images/shape/shape-1.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_7">
                <img src="assets/images/shape/shape-4.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_8">
                <img src="assets/images/shape/shape-3.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_9">
                <img src="assets/images/shape/shape-2.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_10">
                <img src="assets/images/shape/shape-4.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_11">
                <img src="assets/images/shape/shape-1.svg" alt="shape">
            </div><!-- hero shape -->
            <div class="hero_shape shape_12">
                <img src="assets/images/shape/shape-2.svg" alt="shape">
            </div><!-- hero shape -->

            <div class="container">
                <div class="row">
                    <div class="w-full lg:w-1/2">
                        <div class="header_hero_content pt-150 lg:pt-0">
                            <h2 class="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">API test <span class="text-theme-color">Page</span></h2>
                            <p class="mt-8 lg:mr-8">Start testing by pressing the button, or scroll to the appropriate block</p>
                            <div class="hero_btn mt-10">
                                <router-link to="#token" class="main-btn" @click.native="('#token')">Get Started</router-link>
                            </div>
                        </div> <!-- header hero content -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
            <div class="header_shape hidden lg:block"></div>

            <div class="header_image flex items-center">
                <div class="image 2xl:pl-25">
                    <img src="assets/images/header-image.svg" alt="Header Image">
                </div>
            </div>
        </div>


    </section>
</template>

<script>
export default {
    name: "Navbar",
}
</script>
