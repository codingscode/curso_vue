<template>
    <div class="rotulo">
        <label>{{ nome }}:</label>
        <div class="elemento">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['nome']
}
</script>

<style scoped>
    .rotulo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }

    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
    }


    input:focus {
        border: 1px solid #BBB;
    }
</style>
