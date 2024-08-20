<template>
  <div class="flex justify-center">
    <div class="p-4 w-1/2">
      <input type="text" class="input input-sm" v-model="hira" />
      <button class="btn btn-sm" @click="search">Rechercher</button>
      <div v-if="hiraResult">
        <div class="bg-white rounded shadow p-2 text-dark">
          Hira : {{ hiraResult.laharana }}
          Refy : {{ hiraResult.refy }}
          <br>
          Ireo hira mitovy refy aminy :
          <div class="flex flex-wrap -mx-1">
          <div v-for="hira in mitovyResult" class=" px-1 mb-1 mr-1">
            <div class="bg-default w-10 text-white text-center rounded-lg">
              {{hira.laharana}}
            </div>
          </div>

          </div>
        </div>
      </div>
      <!-- <div v-else>
        <p>Tsy misy io hira io!</p>
      </div> -->
    </div>
  </div>
</template>

<script >
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import Notes from "../notes.json";
export default {
  name: "Index",
  setup(props) {
    const state = reactive({
      hira: "",
      hiraResult: "",
      mitovyResult: [],
    });
    const search = () => {
      state.hiraResult = Notes.filter((e) => {
        return e.laharana == state.hira;
      })[0];
      if (state.hiraResult) {
        state.mitovyResult = Notes.filter((e) => {
          return e.refy == state.hiraResult.refy;
        });
      }
      console.log(state.hiraResult);
    };
    onMounted(() => {});
    return {
      ...toRefs(state),
      search,
    };
  },
};
</script>
