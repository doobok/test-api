<template>
    <div id="token" class="container w-full mx-auto pt-32 sm:pt-20">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <div class="flex flex-col justify-center text-center my-10 space-y-4">
                <h2 class="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Get <span class="text-theme-color">Token</span></h2>

                <p>To get started, get a token to be able to register a new user</p>
                <p v-if="response" class="text-green-600">You can now register a new user</p>
                <div class="flex justify-center">
                    <button class="main-btn w-full md:w-1/2"
                            @click="createToken"
                    >Get token</button>
                </div>
                    <XHighlight
                        class="x-highlight"
                        title="Result for /token"
                        lang="json"
                        :show="['title', 'num']"
                        :tool="['full-screen', 'select-all', 'copy']"
                        :maxHeight=300
                        :minHeight=100
                        locale="en"
                        :data="response"
                    >
                    </XHighlight>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TokenComponent",
    data(){
        return {
            response: ''
        }
    },
    methods: {
        createToken(){
            this.$store.dispatch('GET_TOKEN')
                .then((response) => {
                    this.response = response
                })
        }
    },
}
</script>
