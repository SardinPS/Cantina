<template>
  <div class="container">
    <div class="row">
    <h1>Vous souhaitez ajouter une recette à notre liste ?</h1>
    <h2>Rien de plus simple, il vous suffit juste de remplir le formulaire ci-dessous</h2>
    <form>

<label for="basic-url">Your vanity URL</label>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Titre</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Description</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Niveau</span>
  </div>
  <select class="form-control" aria-label="With textarea">
    <option value="1">Pandawan</option>
    <option value="2">Jedi</option>
    <option value="3">Maître</option>
  </select>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Personnes requises</span>
  </div>
  <input type="number" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Temps de préparation (En minutes)</span>
  </div>
  <input type="number" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>
      <input type="submit" value="Envoyer">
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
