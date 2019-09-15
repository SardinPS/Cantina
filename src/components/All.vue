<template>
  <div class="container">
    <h1>Bienvenue à la Cantina</h1>
    <h2>La cuisine gastronomique chez vous</h2>
    <h3>Retrouvez toutes nos recettes sur cette page</h3>
    <RecipeCard v-for="recipe in recipeList" :recipe="recipe" :key="recipe.id" />
  </div>
</template>

<script>
import RecipeCard from './RecipeCard'
import DBservices from '../services/DBservices.js'
export default {
  name: "All",
  components: {
    RecipeCard
  },
  data () {
    return {
      recipeList : null
    }
  },
  created : function() {
    DBservices
      .fetchAll()
      .then(recipeList => {
        this.recipeList = recipeList;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
