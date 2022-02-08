<template>
	<v-app-bar
		app
		color="white"
		elevation="2"
	>
		<v-container class="py-0 fill-height">

			<v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="toggleClick"></v-app-bar-nav-icon>

				<tooltip-button
					v-for="(link, index) in links"
					:key="index"
					color="secondary"
					icon
					:icon-name="link.icon"
					icon-size="48"
					bottom
					cssClass="mx-4"
					:tooltip-label="link.tooltip" />

			<v-spacer></v-spacer>


		</v-container>
	</v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import headerBarLinks from '@/config/links/headerBarItems';
import TooltipButton from "@/components/ui/TooltipButton";
export default {
	name: "HeaderBar",
	components: { TooltipButton },
	data: () => ({
		links: [],
	}),
	mounted() {
		this.links = headerBarLinks
		console.log(this.links)
	},
	methods: {
		...mapActions(['setDrawer']),
		toggleClick() {
			this.setDrawer()
		}
	}
}
</script>

<style scoped>

</style>
