<template>
     <div class="nova-tarefa">
          <input v-model="nome" @keydown.enter="adicionar" type="text">
          <button @click="adicionar">+</button>
     </div>
</template>

<script>
export default {
    data() {
        return {
            nome: ''
        }
    },
    methods: {
        adicionar() {
            this.$emit('tarefaAdicionada', {nome: this.nome})
            this.nome = ''
        }
    }
}
</script>

<style>

</style>