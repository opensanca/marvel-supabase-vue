<template>
  <div class="container-fluid">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Personagem</a></li>
      <li class="breadcrumb-item active" aria-current="page">Adicionar novo</li>
    </ol>
  </nav>
  <h3>Adicionar novo personagem</h3>
  {{character.name}}
  {{character.miniBio}}
    <hr>
    <form action="">
      <div class="mb-3">
        <label
          for="nameCharacter"
          class="form-label">Nome:</label>
        <input
          type="text"
          class="form-control"
          id="nameCharacter"
          v-model="character.name"
          placeholder="Joe Doe">
      </div>
      <div class="mb-3">
        <label
          for="minBioDescription"
          class="form-label">Mini-bio:</label>
        <textarea
          class="form-control"
          id="minBioDescription"
          v-model="character.miniBio"
          rows="3">
        </textarea>
      </div>
      <div class="row">
        <div class="col">
          <router-link to="/"
            class="btn btn-warning">Cancelar
          </router-link>
        </div>
        <div class="col d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary"
            @click="createCharacter">Salvar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Character',
  data() {
    return {
      character: {
        name: '',
        miniBio: '',
      },
    };
  },
  methods: {
    createCharacter() {
      const character = {
        name: this.character.name,
        minibio: this.character.miniBio,
      };
      console.log(character);
      window.localStorage.setItem('character', JSON.stringify(character));
    },
  },
};
</script>
