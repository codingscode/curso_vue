<template>
    <div>
        <p class="nome">Citações</p>
        <p class="versao">Versão 1.0</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDD;
        height: 200px;
        width: 200px;
        border-radius: 100px;
    }

    p {
        margin: 0;
    }

    .nome {
        font-size: 2.1rem;
        font-weight: bold;
    }

    .versao {
        font-size: 1.4rem;
    }
</style>
