<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <!-- <p>Nome do Usuário: <strong>{{nomeAlternativo}}</strong></p> -->
        <p>Nome do Usuário: <strong>{{inverterNome()}}</strong></p>
    </div>
</template>

<script>
export default {
     //props: ['nome'],
     props: {
         nome: {  //ou nome: [String, Array]
            type: String,
            required: true
         }    
     },
     /*data() {
        return {
            nomeAlternativo: this.nome
        }
     },*/
     methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        }
     }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
