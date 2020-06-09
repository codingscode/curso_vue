<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        quantidade: {
            get () {
                return this.$store.state.quantidade
            },
            set (valor) {
                return this.$store.commit('setQuantidade', valor)
            }
        },
        preco: {
            get () {
                return this.$store.state.preco
            },
            set (valor) {
                this.$store.commit('setPreco', valor)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
