<template>
    <div id="users" class="container w-full mx-auto pt-32 sm:pt-20">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <div class="flex flex-col justify-center text-center my-10 space-y-4">
                <h2 class="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                    <span class="text-theme-color">Users </span>list</h2>
                <p>List of registered users</p>

                <div class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-center">
                                        <thead class="border-b bg-theme-color rounded-t-md">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                                ID
                                            </th>
                                            <th scope="col">
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                                Name
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                                Position
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                                Phone
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                                Email
                                            </th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="user in users" class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {{user.id}}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img v-bind:src="user.photo" width="30px" height="30px" class="rounded-full">
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {{user.name}}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {{user.position}}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {{user.phone}}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {{user.email}}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button class="p-2 bg-theme-color text-white rounded-sm" @click="getUser(user.id)">Get user</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="w-full justify-between">
                            <button v-if="prev_url" class="main-btn pricing_btn" @click="getUsers(prev_url)">Previous page</button>
                            <button v-if="next_url" class="main-btn pricing_btn" @click="getUsers(next_url)">Next page</button>
                        </div>
                    </div>
                </div>

                <XHighlight
                    class="x-highlight"
                    title="Result for /users /users/{id}"
                    lang="json"
                    :show="['title', 'num']"
                    :tool="['full-screen', 'select-all', 'copy']"
                    :maxHeight=300
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
    name: "UsersComponent",
    data() {
        return {
            response: '',
            next_url: '',
            prev_url: '',
        }
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        getUsers(url) {
            this.$store.dispatch('GET_USERS', url)
                .then((response) => {
                    this.response = response
                    this.prev_url = response.links.prev
                    this.next_url = response.links.next
                })
        },
        getUser(id) {
            axios
                .get('/users/' + id)
                .then((response) => {
                    alert('Success!')
                    this.response = response.data
                })
                .catch(error => {
                    this.response = error
                });
        }
    },
    computed: {
        ...mapGetters(['users'])
    }
}
</script>

