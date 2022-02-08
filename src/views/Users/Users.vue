<template>
	<h1>Usuários</h1>
</template>

<script>
import sideBarLinks from "../../config/links/sideBarLinks";
import { mapActions } from "vuex";

export default {
	name: "Users",
	mounted() {
		this.setLinks(sideBarLinks.users);
	},
	methods: {
		...mapActions('Sidebar', ['setLinks'])
	}
}
</script>

<style scoped>

</style>
