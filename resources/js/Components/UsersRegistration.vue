<template>
    <div id="register" class="container w-full mx-auto pt-32 sm:pt-20">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <div class="flex flex-col justify-center text-center my-10 space-y-4">
                <h2 class="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Register <span class="text-theme-color">User</span></h2>

                <p>Fill in all fields with the appropriate data</p>
                <div class="flex justify-center">
                    <form @submit.prevent="sendForm" ref="user_form" class="w-full md:w-1/2">
                        <div class="row space-y-4">
                            <div class="w-full">
                                <div class="mx-3">
                                    <div class="single_form">
                                        <input v-model="user.name" name="name" placeholder="Name" type="text" required class="w-full rounded-md py-4 px-6 border border-solid border-body-color">
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="mx-3">
                                    <div class="single_form">
                                        <input v-model="user.email" name="email" placeholder="Email" type="email" required class="w-full rounded-md py-4 px-6 border border-solid border-body-color">
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="mx-3">
                                    <div class="single_form">
                                        <input v-model="user.phone" name="phone" placeholder="Phone number" type="tel" required class="w-full rounded-md py-4 px-6 border border-solid border-body-color">
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="mx-3">
                                    <div class="single_form">
                                        <select v-model="user.position_id" id="position_id" name="position_id" required class="w-full rounded-md py-4 px-6 border border-solid border-body-color">
                                            <option disabled value="">Please select position</option>
                                            <option v-for="position in positions" :key="position.id" :value="position.id">{{ position.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="mx-3">
                                    <div class="single_form">
                                        <input name="photo" id="photo" type="file" class="w-full rounded-md py-4 px-6 border border-solid border-body-color">
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="main-btn w-full"
                            >Register</button>
                        </div>
                    </form>

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
import {mapGetters} from 'vuex'

export default {
    name: "UsersRegistration",
    data() {
        return {
            response: '',
            file: '',
            user: {
                name: '',
                email: '',
                phone: '',
                position_id: '',
            },
        }
    },
    mounted() {
        this.$store.dispatch('GET_POSITIONS')
    },
    methods: {
        sendForm(){
            axios
                .post('/users', new FormData(this.$refs.user_form), {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Token': this.token
                    }
                })
                .then((response) => {
                    alert('Success!')
                    this.response = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.response = error
                });
        },
    },
    computed: {
        ...mapGetters(['token', 'positions'])
    }
}
</script>
