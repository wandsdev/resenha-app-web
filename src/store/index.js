import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true
	},
	mutations: {
		SET_DRAWER: (state, payload = null) => {
			state.drawer = payload ?? !state.drawer
		}
	},
	actions: {
		setDrawer: (context, payload = null) => {
			context.commit('SET_DRAWER', payload)
		}
	},
	getters: {
		drawer: (state) => state.drawer
	},
	modules: {}
})
