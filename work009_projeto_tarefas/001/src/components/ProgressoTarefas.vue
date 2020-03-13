<template>
    <div class="tarefas-progresso">
        <span class="valor-progresso">{{progresso}}%</span>
        <div class="barra-progresso" :style="{width: progresso + '%'}" ></div>
    </div>
</template>

<script>
export default {
    props: {
        progresso: {type: Number, default: 0}
    }
}
</script>

<style>
      .tarefas-progresso {
            position: relative;
            width: 80%;
            border: 1px solid #FFF;
            color: #FFF;
            border-radius: 8px;
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
      }

      .barra-progresso {
            position: absolute;
            border-radius: 8px;
            height: 100%;
            background-color: #4CAF50;
            align-self: flex-start;
      }

      .valor-progresso {
            z-index: 1;
            font-size: 1.5rem;
      }
</style>