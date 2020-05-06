<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                 <a>Início</a>
            </router-link>
            <router-link to="/usuario/10" tag="li" active-class="active">
                 <a>Usuário</a>
            </router-link>
        </ul>
        
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>