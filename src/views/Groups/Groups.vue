<template>
	<h1>Grupos</h1>
</template>

<script>
import sideBarLinks from "../../config/links/sideBarLinks";
import { mapActions } from "vuex";

export default {
	name: "Home",
	mounted() {
		this.setLinks(sideBarLinks.groups);
	},
	methods: {
		...mapActions('Sidebar', ['setLinks'])
	}
}
</script>

<style scoped>

</style>
