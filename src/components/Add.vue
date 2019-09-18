<template>
  <div class="container">
    <h1>Vous souhaitez ajouter une recette à notre liste ?</h1>
    <h2>Rien de plus simple</h2>
    <h2> il vous suffit juste de remplir le formulaire ci-dessous</h2>
    <Form @send="addRecipe" />
  </div>
</template>

<script>
import DBservices from '../services/DBservices'
import Form from './Form'
export default {
  name: 'Add',
  components : {
    Form
  },
  methods : {
    addRecipe : function (recipe){
      DBservices
        .addRecipe(recipe)
        .then(() => {
          this.$router.replace("/All")
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  font-family: 'Cinzel', sans-serif;
  margin : 20px 0;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
