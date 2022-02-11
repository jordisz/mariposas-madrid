<template>
  <main class="main-content" style="background-image: url('gcleopatra.jpg');">
    <ul class="link-list">
      <li class="list-item">
        <nuxt-link to="/especies">
          ¿Cuáles son las especies de mariposas que visitan los parques de Madrid?
        </nuxt-link>
      </li>
      <li class="list-item">
        <nuxt-link to="/preguntas-frecuentes">
          ¿Qué información nos aporta el seguimiento de las poblaciones de mariposas?
        </nuxt-link>
      </li>
      <li class="list-item">
        <nuxt-link to="/recuentos">
          Consulta los datos del observatorio de mariposas urbanas
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-content {
  height: calc(100vh - 70px);
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 55%;
  background-size: cover;
}

.link-list {
  margin: 0;
  padding: 2rem;
  list-style: none;
}

@media (min-width: 610px) {
  .link-list {
    padding-top: 10vh;
  }
}

.list-item {
  display: block;
  height: 22vh;
  margin-top: 2rem;
  font-size: 2em;
}

@media (max-width: 500px) {
  .list-item {
    font-size: 1.5em;
  }
}

.list-item a {
  text-decoration: none;
  padding: 0 1rem  0 0;
  background-color: #ffffff88;
  color: #551a8b;
}

</style>
