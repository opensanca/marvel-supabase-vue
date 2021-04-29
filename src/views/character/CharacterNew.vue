<template>
  <div class="container-fluid">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Personagem</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{character.name}}</li>
    </ol>
  </nav>

  <h3>Adicionar novo personagem</h3>
    <hr>
    <div class="row">
      <div class="col">
        <div
          class="alert alert-primary alert-dismissible fade show"
          role="alert"
          v-if="shouldShowSuccessMessage">
          Boa! Acabou de salvar o {{character.name}} com sucesso!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert" aria-label="Close">
          </button>
        </div>
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
          v-if="shouldShowErrorMessage">
          Ops, ocorreu uma falha ao salvar o personagem, tente novamente.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close">
          </button>
        </div>
      </div>
    </div>
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
           :disabled="!isDisabled"
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
import SUPABASE_AUTH from '../../services/index';

export default {
  name: 'Character',
  data() {
    return {
      shouldShowSuccessMessage: false,
      shouldShowErrorMessage: false,
      character: {
        name: '',
        miniBio: '',
      },
    };
  },
  computed: {
    isDisabled() {
      return this.character.name.length >= 6 && this.character.miniBio.length >= 6;
    },
  },
  methods: {
    createCharacter() {
      const character = {
        name: this.character.name,
        minibio: this.character.miniBio,
      };
      this.saveCharacter(character);
    },
    async saveCharacter(characterFields) {
      const { data, error } = await SUPABASE_AUTH
        .from('character')
        .insert([characterFields]);
      this.onSubmitSuccess(data);
      this.onSubmitError(error);
    },
    onSubmitSuccess(data) {
      this.shouldShowSuccessMessage = true;
      this.cleanForm();
      console.log('save', data);
    },
    onSubmitError(error) {
      if (error) {
        this.shouldShowErrorMessage = true;
        console.log('error', error);
      }
    },
    cleanForm() {
      this.character = {
        name: '',
        miniBio: '',
      };
    },
  },
};
</script>
