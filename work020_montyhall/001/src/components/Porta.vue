<template>
       <div class="porta-area">
           <div class="porta-moldura">
               <Presente v-if="aberto && temPresente" />
           </div>
           <div class="porta">
               <div class="numero">{{numero}}</div>
               <div class="macaneta"></div>
           </div>
       </div>
</template>

<script>
import Presente from './Presente'

export default {
      name: 'Porta',
      components: {Presente},
      props: {
            numero: {},
            temPresente: {tipo: Boolean}
      },
      data: function() {
            return {
                aberto: false,
                selecionado: false
            }
      }
}
</script>

<style>
        :root {
            --porta-borda: 5px solid brown;
        }

        .porta-area {
            position: relative;
            width: 200px;
            height: 310px;
            border-bottom: 10px solid #AAA;
            margin-bottom: 20px;
            font-size: 3rem;

            display: flex;
            justify-content: center;
        }

        .porta-moldura {
            position: absolute;
            height: 300px;
            width: 180px;

            border-left: var(--porta-borda);
            border-top: var(--porta-borda);
            border-right: var(--porta-borda);

            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
</style>