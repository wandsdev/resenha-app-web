const state = {
	links: []
}

const mutations = {
	SET_LINKS: (state, payload) => {
		state.links = payload
	}
}

const actions = {
	setLinks: (context, payload) => {
		context.commit('SET_LINKS', payload)
	}
}

const getters = {
	links: (state) => state.links
}

export default { namespaced: true, state, mutations, actions, getters };
