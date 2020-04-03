<template>
     <div>
         <ul>
          <li v-for="cada in frutas" :key="cada">{{cada}}</li>
         </ul>
         <input type="text" v-model="fruta" @keydown.enter="add">
     </div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
      mixins: [frutasMixin, usuarioMixin],
      created() {
         console.log('Created - Frutas.vue!')
      }
}
</script>

<style>

</style>