<template>
	<v-navigation-drawer
		:value="drawer"
		mobile-breakpoint="960"
		@input="inputEvent"
		app
	>
		<v-sheet color="grey lighten-4"	class="pa-4">
			<v-avatar
				class="mb-4"
				color="grey darken-1"
				size="64"
			></v-avatar>

			<div>john@vuetifyjs.com</div>
		</v-sheet>

		<v-divider></v-divider>

		<v-list class="pt-0">
			<v-list-item
				v-for="[icon, text] in links"
				:key="icon"
				link
			>
				<v-list-item-icon>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ text }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: "SideBar",
	data: () => ({}),
	methods: {
		...mapActions(['setDrawer']),
		inputEvent(event) {
			if (!event) {
				this.setDrawer(event)
			}
		}
	},
	computed: {
		...mapGetters(['drawer']),
		...mapGetters('Sidebar', ['links'])
	}
}
</script>

<style scoped>

</style>
