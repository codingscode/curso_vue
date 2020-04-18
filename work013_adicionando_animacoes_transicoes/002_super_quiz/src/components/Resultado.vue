<template>
    <div class="resultado" :class="{errado: !resultado}">
        <span v-if="resultado">Resposta certa! ;)</span>
        <span v-else>Resposta errada! :(</span>
        <hr>
        <button @click="$emit('confirmado')">Próxima pergunta</button>
    </div>
</template>

<script>
export default {
        props: {
            resultado: {
                type: Boolean,
                required: true
            }
        }
}
</script>

<style>
    .resultado {
        height: 400px;
        color: #000;
        background-color: #FFF;
        width: 70%;
        border-radius: 20px;
        font-size: 5.5rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #89c454;
        color: #30863d;
    }

    .resultado hr {
        color: #FFF;
    }

    .resultado.errado {
        background-color: #f05250;
        color: #bb2814;
    }

    .resultado button {
        outline: none;
        align-self: center;
        padding: 10px 20px;
        font-size: 1.7rem;
        border-radius: 8px;
        background-color: #FFF;
        color: #30863d;
        font-weight: 600;
    } 

    .resultado.errado button {
        color: #bb2814;
    }
</style>
