<template>
     <div class="nova-tarefa">
          <input v-model="nome" @keydown.enter="adicionar" type="text" 
                 class="form-elemento" placeholder="Nova tarefa?">
          <button @click="adicionar" class="form-elemento">+</button>
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
      .nova-tarefa {
        margin: 35px;
      }

      .form-elemento {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
      }

      input.form-elemento {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      button.form-elemento {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
</style>