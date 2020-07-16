<template>
    <button class="botao" :class="{duplo, triplo, operacao}" >
        {{rotulo}}
    </button>
</template>

<script>
export default {
      props: {
          rotulo: {},
          operacao: {type: Boolean},
          duplo: {type: Boolean},
          triplo: {type: Boolean}
      }
}
</script>

<style>
     :root {
        --bg-button: #f0f0f0;
        --border-button: solid 1px #888;
     }

     .botao {
        font-size: 1.4em;
        background-color: var(--bg-button);
        border: none;
        border-right: var(--border-button);
        border-bottom: var(--border-button);
        outline: none
     }

     .botao:active {
        background-color: #ccc;
     }

     .botao.duplo {
         grid-column: span 2;
     }

     .botao.triplo {
         grid-column: span 3;
     }

     .botao.operacao {
         background-color: #f79859;
         color: #fff;
     }

     .botao.operacao:active {
         background-color: #fa8231cc;
      
     }

</style>