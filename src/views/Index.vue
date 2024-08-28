<template>
  <div class="flex justify-center items-center h-screen">
    <div class="absolute top-4 right-4">
      <button class="btn btn-sm btn-error text-white" @click="logout">Déconnecter</button>
    </div>

    <div class="p-4 w-full md:w-2/3 sm:w-2/3">
      <div class="flex space-x-2 mb-2">
        <input type="text" class="input input-sm" v-model="hira"  @keyup.enter="search"/>
        <button class="btn btn-sm" @click="search">Rechercher</button>
      </div>
      <div v-if="hiraResult">
        <div class="bg-white rounded shadow p-2 text-dark">
          Hira : {{ hiraResult.laharana }} Refy : {{ hiraResult.refy }}
          <br />
          Ireo hira mitovy refy aminy :
          <div class="" id="hira-mitovy-refy">
            <div class="flex flex-wrap">
              <div v-for="hira in mitovyResult" class="px-1 mb-1">
                <div class="bg-default w-10 text-white text-center rounded-lg">
                  {{ hira.laharana }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
#hira-mitovy-refy {
  max-height: 240px;
  @apply overflow-y-auto;
}
</style>

<script >
import Notes from "../notes.json";
import { logout } from "../services/AuthService";
export default {
  data() {
    return {
      hira: "",
      hiraResult: "",
      mitovyResult: [],
    };
  },
  methods: {
    search() {
      // Find the first note in the Notes array that has a matching laharana value with the input hira.
      this.hiraResult = Notes.filter((e) => {
        return e.laharana == this.hira;
      })[0];

      // If a matching hiraResult is found, find all notes in the Notes array that have a matching refy value with
      // the hiraResult's refy value and store them in the state's mitovyResult array.
      if (this.hiraResult) {
        this.mitovyResult = Notes.filter((e) => {
          return e.refy == this.hiraResult.refy;
        });
      }
    },
    logout() {
      logout();
    },
  },
};
</script>
