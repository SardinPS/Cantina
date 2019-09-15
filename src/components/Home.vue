<template>
  <div class="container">
    <h1>Bienvenue à la Cantina</h1>
    <h2>La cuisine gastronomique chez vous</h2>
    <div class="col-md-12">
      <h3>Voici un exemple de recette faite pour vous</h3>
      <RecipeCard :recipe="instructions" v-if="instructions" />
    </div>
    <div class="actions">
      <a href="#" class="btn" @click.prevent="getRandomRecipe">
        <i class="fa fa-random"/> Regarder une autre recette
      </a>
    </div>
  </div>
</template>

<script>
import DBservices from '../services/DBservices.js'
import RecipeCard from './RecipeCard'
export default {
  name: "Home",
  components : {
    RecipeCard
  },
  data : function() {
    return {
      directions : null,
      instructions : null
    };
  },
  methods : {
    getRandomRecipe : function() {
      this.instructions = this.directions[ Math.floor(Math.random() * this.directions.length) ];
    }
  },
  created : function() {
    DBservices
      .fetchAll()
      .then(recipeList => {
        this.directions = recipeList;
        this.getRandomRecipe();
      })
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
.card img{
  max-height: 200px;
  max-width: 200px;
}

</style>
