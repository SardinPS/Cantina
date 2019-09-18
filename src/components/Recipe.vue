<template>
<div class="recipe" @formate-recipe="formate">
    <h1>Voici la recette pour réaliser {{ recipe.titre }}</h1>
    <h2> Bon appétit !</h2>
  <div class="card mb-3" style="max-width: 33%;">
  <div class="row no-gutters">
    <div class="col-md-12">
      <img :src="recipe.photo" class="card-img" :alt="`Photo de ${recipe.titre}`">
    </div>
    <div class="col-md-12">
      <div class="card-body">
        <h5 class="card-title">Voici la recette pour {{ recipe.titre }}</h5>
        <p class="card-text">Recette à base de {{ recipe.description }}</p>
        <hr>
        <p class="card-text">Niveau : {{ recipe.niveau }}</p>
        <hr>
        <p class="card-text">{{ recipe.personnes | person }}</p>
        <hr>
        <p class="card-text">Temps de preparation : {{ recipe.tempsPreparation | convert }}</p>
        <hr>
        <p class="card-text">Ingredients : {{ recipe.ingredients }}</p>
        <hr>
        <p class="card-text">Etapes de préparation : {{ recipe.etapes }}</p>
      </div>
    </div>
  </div>
</div>
  
  </div>
</template>

<script>

import DBservices from '../services/DBservices.js'
export default {
    name: 'Recipe',
    data : function(){
        return {
            recipe : [
                {
                    titre : null,
                }
            ]
        }
    },
    methods : {
        formate(recipe) {
            this.recipe = recipe;
        }
    },
    filters : {
        convert: function(value) {
      var nbH = parseInt(value / 60);
      var minRestantes = value % 60;

      if (nbH === 0 && minRestantes === 1) {
        return minRestantes + " " + "minute";
      } else if (nbH === 0 && minRestantes > 1) {
        return minRestantes + " " + "minutes";
      } else if (nbH === 1 && minRestantes === 0) {
        return nbH + " " + "heure";
      } else if (nbH > 1 && minRestantes === 0) {
        return nbH + " " + "heures";
      } else if (nbH === 1 && minRestantes === 1) {
        return nbH + " " + "heure" + " et " + minRestantes + " " + "minute";
      } else if (nbH === 1 && minRestantes > 1) {
        return nbH + " " + "heure" + " et " + minRestantes + " " + "minutes";
      } else if (nbH > 1 && minRestantes === 1) {
        return nbH + " " + "heures" + " et " + minRestantes + " " + "minute";
      } else {
        return nbH + " " + "heures" + " et " + minRestantes + " " + "minutes";
      }
    },
        person: function(value) {
      if (value === 1) {
        return value + " " + "personne requise";
      } else {
        return value + " " + "personnes requises";
      }
    }
    },

    created: function(){
    DBservices.fetchOne(this.$route.params.id).then(recipe =>{
        this.recipe = recipe;
        recipe.etapes = recipe.etapes.toString();
        recipe.ingredients = recipe.ingredients.join(', ');
        recipe.ingredients = recipe.ingredients.toString();
    })
    },
}
</script>

<style scoped>
h1,
h2,
h5{
    font-family: 'Cinzel', sans-serif;
    margin : 20px 0;
}
h5{
    font-weight: bold;
}
.card{
    margin : 0 33%;
}

.card-img{
    height: 325px;
}

</style>