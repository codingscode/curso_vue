<template>
      <div class="tarefa" :class="stateClasse">
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
</style>