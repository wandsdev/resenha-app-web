<template>
	<h1>Home</h1>
</template>

<script>
import { mapActions } from 'vuex'
import sideBarLinks from "../../config/links/sideBarLinks";
export default {
	name: "Home",
	mounted() {
		this.setLinks(sideBarLinks.home);
	},
	methods: {
		...mapActions('Sidebar', ['setLinks'])
	}
}
</script>

<style scoped>

</style>
