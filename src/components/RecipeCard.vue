<template>
    <div class="card" style="width: 25%;">
      <img :src="recipe.photo" class="card-img-top" :alt="`Photo de ${recipe.titre}`" />
      <div class="card-body">
        <h5 class="card-title">{{ recipe.titre }}</h5>
        <p class="card-text">{{ recipe.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Niveau de difficulté : {{ recipe.niveau }}</li>
        <li class="list-group-item">{{ recipe.personnes | person }}</li>
        <li class="list-group-item">Temps de préparation : {{ recipe.tempsPreparation | convert }}</li>
        <li class="list-group-item">
          <router-link :to ="`/Recipe/${recipe.id}`">Voir la recette en détail</router-link>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link" @click.prevent="onRemove">Supprimer</a>
      </div>
    </div>
</template>

<script>
export default {
  name: "RecipeCard",

  filters: {
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
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods : {
    onRemove : function (){
      this.$emit('remove', this.recipe);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img-top{
  height: 250px;
}
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
  font-family: 'Cinzel', sans-serif;
  font-weight: bold;
}
</style>
