import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

const store = new Vuex.Store({
    modules: {
       
    },
    plugins: [vuexLocal.plugin]
})
export default store