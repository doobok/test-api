<template>
    <div>

        <token-component></token-component>
        <user-registration></user-registration>
        <users-component></users-component>




    </div>


</template>

<script>
export default {
    name: "Home",
    components: {
        TokenComponent: () => import('../Components/TokenComponent'),
        UserRegistration: () => import('../Components/UsersRegistration'),
        UsersComponent: () => import('../Components/UsersComponent')
    }
}
</script>
