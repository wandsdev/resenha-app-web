<template>
	<v-app-bar
		app
		color="white"
		elevation="2"
	>
		<v-container class="py-0 fill-height">
			<v-btn v-for="link in links2" :key="link" text>
				{{ link }}
			</v-btn>

			<v-spacer></v-spacer>

			<v-responsive max-width="260">
				<v-text-field
					dense
					flat
					hide-details
					rounded
					solo-inverted
				></v-text-field>
			</v-responsive>
		</v-container>
	</v-app-bar>
</template>

<script>
export default {
	name: "HeaderBar",
	data: () => ({
		links2: [
			'Dashboard',
			'Messages',
			'Profile',
			'Updates',
		],
	})
}
</script>

<style scoped>

</style>
