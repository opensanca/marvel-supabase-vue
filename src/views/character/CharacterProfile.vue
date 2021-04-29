<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
        <li class="breadcrumb-item active" aria-current="page">Personagem / {{character.name}}</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col">
      <img src="../../assets/deadpool.jpg" alt="">
      </div>
      <div class="col">
        <h3>{{ character.name }}</h3>
        <p>{{character.minibio}}</p>
        <router-link
          to="/"
          class="btn btn-outline-secondary">Voltar
        </router-link>
         <button
          class="btn btn-outline-primary">Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterProfile',
  data() {
    return {
      id: this.$route.params.id,
      character: {},
    };
  },
  mounted() {
    this.setCharacter();
  },
  methods: {
    async setCharacter() {
      const characterId = this.$route.params.id;
      const charactersList = JSON.parse(localStorage.getItem('characters'));
      const characterFinder = charactersList.find((item) => item.id === characterId);
      this.character = await characterFinder;
    },
  },
};
</script>
