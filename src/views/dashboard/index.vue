<template>
  <div class="container-fluid">
    <div class="row mb-5 position-relative">
      <div class="col">
        <h3>Dashboard Marvel</h3>
      </div>
       <div class="col d-flex justify-content-end">
       <router-link
        to="/novo"
        type="button"
        class="btn btn-outline-primary">Adicionar personagem
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/venon.jpeg"
            class="card-img-top"
            alt="Venon">
          <div class="card-body">
            <h5 class="card-title">Venon</h5>
            <p class="card-text">Some quick example text to build on the
              card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/hulk.jpeg"
            class="card-img-top"
            alt="Venon">
          <div class="card-body">
            <h5 class="card-title">Hulk</h5>
            <p class="card-text">Some quick example text to build on the
              card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/deadpool.jpg"
            class="card-img-top"
            alt="Venon">
          <div class="card-body">
            <h5 class="card-title">DeadPool</h5>
            <p class="card-text">Some quick example text to build on the
              card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/villains.jpg"
            class="card-img-top"
            alt="Venon">
          <div class="card-body">
            <h5 class="card-title">Thanos</h5>
            <p class="card-text">Some quick example text to build on the
              card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Detalhes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
