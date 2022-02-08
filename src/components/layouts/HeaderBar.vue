<template>
	<v-app-bar
		app
		color="white"
		elevation="2"
	>
		<v-container class="py-0 fill-height">

			<v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="toggleClick"></v-app-bar-nav-icon>

			<v-tabs >
				<v-tabs-slider></v-tabs-slider>
				<v-tab
					v-for="(link, index) in links" :key="index"
					@click="clickTab(link.path)"
				>
					<v-tooltip class="py-2" bottom>
						<template v-slot:activator="{ on, attrs }">
								<v-icon v-bind="attrs"
										v-on="on"
										size="32">
									{{ link.icon }}
								</v-icon>
						</template>
						<span class="py-2">{{ link.tooltip }}</span>
					</v-tooltip>
				</v-tab>
			</v-tabs>

			<v-spacer></v-spacer>


		</v-container>
	</v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import headerBarLinks from '@/config/links/headerBarLinks';
import TooltipButton from "@/components/ui/TooltipButton";
export default {
	name: "HeaderBar",
	components: { TooltipButton },
	data: () => ({
		links: [],
	}),
	mounted() {
		this.links = headerBarLinks
	},
	methods: {
		...mapActions(['setDrawer']),
		toggleClick() {
			this.setDrawer()
		},
		clickTab(path) {
			if (path !== this.$router.currentRoute.path) {
				this.$router.push(path)
			}

		}
	}
}
</script>

<style scoped>

</style>
