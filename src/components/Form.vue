<template>
  <form @submit.prevent="onSubmit()">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Titre</span>
      </div>
      <input type="text" v-model="recipe.titre" class="form-control" id="title" aria-describedby="basic-addon3" />
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>

    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Description</span>
      </div>
      <textarea class="form-control" aria-label="With textarea" v-model="recipe.description" id="description"></textarea>
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Photo</span>
      </div>
      <input type="text" class="form-control" id="photo" v-model="recipe.photo" aria-describedby="basic-addon3" placeholder="URL de la photo" />
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Niveau</span>
      </div>
      <select class="form-control" aria-label="With textarea" v-model="recipe.niveau" id="level">
        <option value="padawan">Pandawan</option>
        <option value="jedi">Jedi</option>
        <option value="maitre">Maître</option>
      </select>
      <span v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Personnes requises</span>
      </div>
      <input type="number" class="form-control" id="person" v-model="recipe.personnes" aria-describedby="basic-addon3" />
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Temps de préparation (En minutes)</span>
      </div>
      <input type="number" class="form-control" id="preparationTime" v-model="recipe.tempsPreparation" aria-describedby="basic-addon3" />
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Quantité</span>
      </div>
      <input type="text" class="form-control" id="preparationTime" v-model="recipe.quantite" aria-describedby="basic-addon3" />
      <span v-if="$v.recipe.quantite.$dirty && !$v.recipe.quantite.required">Le champs est requis</span>
    </div>

    <div class="input-group" id="Ingredient">
      <div class="input-group-prepend">
        <span class="input-group-text">Ingrédient</span>
      </div>
      <textarea class="form-control" aria-label="With textarea" id="ingredients" v-model="recipe.ingredient"></textarea>
      <span v-if="$v.recipe.ingredient.$dirty && !$v.recipe.ingredient.required">Le champs est requis</span>
    </div>

    <button @click.prevent="addIngredient()">Ajouter un ingrédient</button>

    <div class="input-group" id="Etape">
      <div class="input-group-prepend">
        <span class="input-group-text">Etape</span>
      </div>
      <textarea class="form-control" aria-label="With textarea" id="steps" v-model="recipe.etapes"></textarea>
      <span v-if="$v.recipe.etapes.$dirty && !$v.recipe.etapes.required">Le champs est requis</span>
    </div>

    <button @click.prevent="addEtape()">Ajouter une étape</button>

    <input type="submit" value="Envoyer" />
  </form>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators'
export default {
  name: "Form",
  props : {
      recipe : {
          type : Object,
          default: function (){
              return {
                  id : null,
                  titre : "",
                  description : "",
                  niveau : "",
                  personnes : "",
                  tempsPreparation : "",
                  quantite : "",
                  ingredient : "",
                  ingredients : "",
                  etapes : "",
                  photo : ""
              }
          }
      },
  },
  validations: {
    recipe: {
      titre: { required },
      description: { required },
      niveau: { required },
      personnes: { required },
      tempsPreparation: { required },
      quantite: { required },
      ingredient: { required },
      etapes: { required },
      photo: { url }
    }
  },
  methods : {
    addIngredient : function () {
      var addI = 
      `<div class="input-group" id="Ingredient">
        <div class="input-group-prepend">
          <span class="input-group-text">Ingrédient</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" id="ingredients" v-model="recipe.ingredients"></textarea>
      </div>`;
   return document.getElementById('Ingredient').innerHTML += addI;
    },
    addEtape : function () {
      var addE = 
      `<div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Etape</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" id="steps" v-model="recipe.steps"></textarea>
      </div>`;
   return document.getElementById('Etape').innerHTML += addE;
    },
    onSubmit: function () {
        this.recipe.ingredients = [[this.recipe.quantite, this.recipe.ingredient]];
        this.recipe.etapes = [this.recipe.etapes];
        this.recipe.personnes = parseInt(this.recipe.personnes);
        this.recipe.tempsPreparation = parseInt(this.recipe.tempsPreparation);
        if(this.$v.recipe.$invalid)
         return this.$v.recipe.$touch();
        this.$emit('send', this.recipe);
    }
  }
};
</script>

<style>
</style>