<template>
    <div class="painel">
        <div class="cabecalho">
            <span class="titulo">{{ titulo }}</span>
            <span class="notificacao" v-if="notificacao">
                {{ notificacao }}
            </span>
        </div>
        <div class="conteudo">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['titulo', 'notificacao']
}
</script>

<style scoped>
    .painel {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 5px;
    }

    .cabecalho {
        display: flex;
        justify-content: center;
    }

    .titulo {
        flex: 1;
        padding: 5px;
    }

    .conteudo {
        padding: 25px;
    }

    .notificacao {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 600;
        color: #FFF;
        background-color: #e53935;
        width: 60px;
    }

    .painel[vermelho] .cabecalho { color: #FFF; background-color: #c62828; }
    .painel[vermelho] .conteudo { background-color: #f44336; }

    .painel[verde] .cabecalho { color: #FFF; background-color: #2E7D32; }
    .painel[verde] .conteudo { background-color: #4CAF50; }
    
    .painel[azul] .cabecalho { color: #FFF; background-color: #1565C0; }
    .painel[azul] .conteudo { background-color: #2196F3; }

    .painel[roxo] .cabecalho { color: #FFF; background-color: #6A1B9A; }
    .painel[roxo] .conteudo { background-color: #9C27B0; }
</style>
