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

export default {
      mixins: [frutasMixin]
}
</script>

<style>

</style>