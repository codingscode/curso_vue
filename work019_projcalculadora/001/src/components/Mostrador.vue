<template>
    <div class="mostrador">
        {{valor}}
    </div>
</template>

<script>
export default {
     props: ['valor']
}
</script>

<style>
     .mostrador {
         grid-column: span 4;
         background-color: #0004;

         display: flex;
         justify-content: flex-end;
         align-items: center;
         padding: 20px;
         font-size: 2.1em;
         overflow: hidden;
     }
</style>