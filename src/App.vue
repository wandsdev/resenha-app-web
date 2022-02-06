<template>
	<v-app id="inspire">
		<HeaderBar/>
		<SideBar/>
		<v-main>
			<v-container class="py-4 px-4" fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import HeaderBar from '@/components/layouts/HeaderBar';
import SideBar from '@/components/layouts/SideBar';
export default {
	name: 'App',
	components: { HeaderBar, SideBar },
	data: () => ({
		cards: ['Today', 'Yesterday'],
	}),
}
</script>
