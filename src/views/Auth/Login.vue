<template>
  <div>
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white rounded-lg shadow-md p-8 w-1/2">
        <h1 class="text-3xl font-bold mb-4 text-primary">Connexion</h1>
        <form @submit.prevent="signIn">
          <!-- <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Nom d'utilisateur</label
            >
            <input
              type="text"
              id="username"
              v-model="username"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
            />
          </div> -->
          <div class="mb-4">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Mot de passe</label
            >
            <input
              type="password"
              id="password"
              v-model="password"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
            />
          </div>
          <button
            type="submit"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none
              focus:shadow-outline
            "
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
    
  </div>
</template>
<script>
import { login } from "../../services/AuthService";
export default {
  name: "Login",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    signIn(e) {
      e.preventDefault();
      login({ password: this.password });
    },
  },
};
</script>