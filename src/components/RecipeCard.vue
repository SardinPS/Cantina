<template>
    <div class="col-md-12">
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img :src="recipe.photo" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ recipe.titre }}</h5>
            <p class="card-text">{{ recipe.description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Niveau de difficulté : {{ recipe.niveau }}</li>
            <li class="list-group-item">Nombre de personnes : {{ recipe.personnes }}</li>
            <li class="list-group-item">Temps de préparation : {{ recipe.tempsPreparation }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Modifier</a>
            <a href="#" class="card-link">Supprimer</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe : {
      type : Object,
      required : true
    }
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
