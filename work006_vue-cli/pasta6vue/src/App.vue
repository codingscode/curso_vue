<template>
   <div id="app">
     {{titulo}}
     <button @click="titulo += '###' ">+</button>
   </div>
</template>

<script>
export default {
     data: function() {
        return {
           titulo: 'Teste Data usando Vue'
        }
     }
}
</script>

<style>
    #app {
       background-color: darkgreen;
       color: gold;
    }
</style>