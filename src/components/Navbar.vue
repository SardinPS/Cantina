<template>
    <nav class="navbar navbar-expand-lg navbar-light">
  <router-link to ="/"><img src="../assets/logo.png"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to ="/">Accueil</router-link>
      <router-link to ="/All">Toutes nos recettes</router-link>
      <router-link to ="/Add">Ajouter une recette</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  background-color: white;
}
  nav a{
    margin : 0 20px;
    font-family: 'Cinzel', sans-serif;
    font-weight: bold;
  }
</style>
