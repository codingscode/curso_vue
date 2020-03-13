<template>
      <div class="tarefa" :class="stateClasse" @click="$emit('estadoTarefaMudou', tarefa)">
           <span @click.stop="$emit('tarefaApagada', tarefa)" class="fechar">x</span>
           <p>{{tarefa.nome}}</p>
      </div>
</template>

<script>
export default {
      props: {
            tarefa: {type: Object, required: true}
      },
      computed: {
          stateClasse() {
                return {
                    pendente: this.tarefa.pendente,
                    feito: !this.tarefa.pendente
                }
         }
      }
}
</script>

<style>
     .tarefa {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
     }

     .pendente {
        border-left: 12px solid #B73229;
        background-color: #F44336;
     }

     .feito {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
     }

     .pendente .fechar {
        background-color: #B73229;
     }

     .feito .fechar {
        background-color: #0A8F08;
     }

     .fechar {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
     }
</style>