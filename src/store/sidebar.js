const state = {
	dashboardItems: [
		['mdi-inbox-arrow-down', 'Inbox'],
		['mdi-send', 'Send'],
		['mdi-delete', 'Trash'],
		['mdi-alert-octagon', 'Spam'],
	]
}

const mutations = {

}

const actions = {

}

const getters = {
	items: (state) => state.dashboardItems
}

export default { namespaced: true, state, mutations, actions, getters };
