<template>
       <div class="grade-tarefa">
            <template v-if="tarefasgrade.length">
                <Tarefa v-for="(tarefa, i) in tarefasgrade" :key="tarefa.nome"
                     :tarefa="tarefa" @tarefaApagada="$emit('tarefaApagada', i)"></Tarefa>
            </template>
            <p v-else class="sem-tarefa"> Sua vida está em dia :)</p>
       </div>
</template>

<script>
import Tarefa from './Tarefa.vue'

export default {
      components: {Tarefa},
      props: {
          tarefasgrade: {type: Array, required: true}
      }
}
</script>

<style>
      .grade-tarefa {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
      }

      .grade-tarefa .tarefa {
            margin: 10px;
      }

      .sem-tarefa {
            color: #AAA;
            font-size: 1.7rem;
      }
</style>