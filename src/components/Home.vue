<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
    <h1>Bienvenue à la Cantina</h1>
  </div>
    <h2>La cuisine gastronomique chez vous</h2>
     
      <h3>Voici un exemple de recette faite pour vous</h3>
  
    <div class="actions col-md-12">
      <a href="#" class="btn" @click.prevent="getRandomRecipe" id="btn">
         Regarder une autre recette
      </a>
    </div>
        <RecipeCard :recipe="instructions" v-if="instructions" @remove="removeRecipe" />
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
    },
    removeRecipe : function(recipeToDelete){
      DBservices.removeRecipe(recipeToDelete).then(res => {
          let index = this.directions.indexOf(recipeToDelete);
          if(index > -1){
            this.directions.splice(index, 1); 
          }
          this.getRandomRecipe();
        
      });
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

.card{
  margin: 10px auto;
}
h1,
h2,
h3 {
  font-family: 'Cinzel', sans-serif;
  margin : 20px 0;
}
h2,h3{
  font-size: 24px;
  margin : 0 25px;

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
  font-weight: bold;
  text-align: center;
  padding : 20px;
}
.card img{
  max-height: 200px;
  max-width: 200px;
}

#btn{
  margin: 20px 0;
  background-color: #42b983;
  color: white;
  padding: 10px;
}

</style>
