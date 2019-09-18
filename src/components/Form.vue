<template>
  <form @submit.prevent="onSubmit()">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Titre</span>
      </div>
      <input type="text" v-model="recipe.titre" class="form-control" id="title" aria-describedby="basic-addon3" placeholder="Caramel" />
      <span v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>

    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Description</span>
      </div>
      <textarea class="form-control" aria-label="With textarea" v-model="recipe.description" id="description" placeholder="Caramel dans une casserole"></textarea>
      <span v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Photo</span>
      </div>
      <input type="text" class="form-control" id="photo" v-model="recipe.photo" aria-describedby="basic-addon3" placeholder="http://" />
    </div>

    <div class="input-group mb-3">
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
      <input type="number" class="form-control" id="person" v-model="recipe.personnes" aria-describedby="basic-addon3" placeholder="1" />
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">Le champs est requis</span>
      <span v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.between">Le nombre de personnes requises doit être compris entre 1 et 30</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Temps de préparation (En minutes)</span>
      </div>
      <input type="number" class="form-control" id="preparationTime" v-model="recipe.tempsPreparation" aria-describedby="basic-addon3" placeholder="10" />
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Le champs est requis</span>
      <span v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.between">Le temps de préparation doit être compris entre 1 et 1440 minutes</span>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Quantité</span>
      </div>
      <input type="text" class="form-control" id="preparationTime" v-model="recipe.quantite" aria-describedby="basic-addon3" placeholder="100g" />
      <span v-if="$v.recipe.quantite.$dirty && !$v.recipe.quantite.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3" id="Ingredient">
      <div class="input-group-prepend">
        <span class="input-group-text">Ingrédient</span>
      </div>
      <textarea class="form-control" aria-label="With textarea" id="ingredients" v-model="recipe.ingredient" placeholder="Sucre"></textarea>
      <span v-if="$v.recipe.ingredient.$dirty && !$v.recipe.ingredient.required">Le champs est requis</span>
    </div>

    <div class="input-group mb-3" id="Etape">
      <div class="input-group-prepend">
        <span class="input-group-text">Etape</span>
      </div>
      <textarea class="form-control" aria-label="With textarea" id="steps" v-model="recipe.etapes" placeholder="Faire revenir le sucre dans une casserole pendant X minutes"></textarea>
      <span v-if="$v.recipe.etapes.$dirty && !$v.recipe.etapes.required">Le champs est requis</span>
    </div>

    <input type="submit" value="Envoyer" id="btn" class="btn" />
  </form>
</template>

<script>
import { required, url, between } from 'vuelidate/lib/validators'
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
      personnes: { between : between(1, 30), required },
      tempsPreparation: { between : between(1, 1440), required },
      quantite: { required },
      ingredient: { required },
      etapes: { required },
      photo: { url }
    }
  },
  methods : {
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

.input-group-text{
  color: white;
  background-color: #42b983;
  font-family: 'Cinzel', sans-serif;
}
#btn{
   margin: 20px 0;
  background-color: #42b983;
  color: white;
  padding: 20 0px;
}
</style>