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
      <div class="col"
        v-for="character in characters"
        :key="character.id">
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/marvel-heroes.jpg"
            class="card-img-top"
            alt="Venon">
          <div class="card-body">
            <h5 class="card-title">
              {{character.name}}
            </h5>
            <p class="card-text">{{character.minibio}}</p>
            <div class="row">
              <div class="col">
                 <button
                  @click="goToCharacter(character.id)"
                  class="btn btn-primary">Detalhes
                </button>
              </div>
              <div class="col d-flex justify-content-end">
                <button
                  @click="removeCharacter(character.id)"
                  class="btn btn-warning mr-5">Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SUPABASE_AUTH from '../../services/index';

export default {
  name: 'Dashboard',
  data() {
    return {
      characters: [],
    };
  },
  created() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      const { data, error } = await SUPABASE_AUTH
        .from('character')
        .select();
      this.callBackOnFetchSuccess(data);
      this.callbackOnFetchError(error);
    },
    callBackOnFetchSuccess(data) {
      this.characters = data;
      localStorage.setItem('characters', JSON.stringify(this.characters));
    },
    callbackOnFetchError(error) {
      if (error) {
        console.log(error);
      }
    },
    goToCharacter(characterId) {
      this.$router.push({
        name: 'CharacterProfile',
        params: {
          id: characterId,
        },
      });
    },
    async removeCharacter(characterId) {
      const { data, error } = await SUPABASE_AUTH
        .from('character')
        .delete()
        .match({ id: characterId });

      this.callBackOnRemoveSuccess(data);
      this.callbackOnFetchError(error);
    },
    callBackOnRemoveSuccess(data) {
      this.getCharacters();
      console.log('removido', data);
    },
  },
};
</script>
