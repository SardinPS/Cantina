<template>
  <div class="container">
    <h1>Bienvenue à la Cantina</h1>
    <h2>La cuisine gastronomique chez vous</h2>
    <h3>Retrouvez toutes nos recettes sur cette page</h3>
    <RecipeCard v-for="recipe in recipeList" :recipe="recipe" :key="recipe.id" @remove="removeRecipe" />
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
  methods : {
    removeRecipe : function(recipeToDelete){
      DBservices.removeRecipe(recipeToDelete).then(res => {
          let index = this.directions.indexOf(recipeToDelete);
          if(index > -1){
            this.directions.splice(index, 1); 
          }
      });
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
.card{
  display: inline-flex;
  margin: 20px;
  height: 700px;
}
h1,
h2,
h3 {
  font-family: 'Cinzel', sans-serif;
  margin : 20px 0;
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
