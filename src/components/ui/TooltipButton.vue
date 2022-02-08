<template>
	<v-tooltip :bottom="bottom" :top="top" :right="right" :left="left">
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				:icon="icon"
				:color="color"
				v-bind="attrs"
				v-on="on"
				:class="cssClass"
			>
				<v-icon v-if="icon" :size="iconSize">{{ iconName }}</v-icon>
				<template v-else>{{ btnLabel }}</template>
			</v-btn>
		</template>
		<span>{{ tooltipLabel }}</span>
	</v-tooltip>
</template>

<script>
export default {
	name: "TooltipButton",
	props: {
		color: {
			type: String,
			default: 'transparent'
		},
		icon: {
			type: Boolean,
			deafult: false
		},
		iconName: {
			type: String,
		},
		iconSize: {
			type: [String, Number],
			deafult: 24
		},
		btnLabel: {
			type: String,
			default: ''
		},
		tooltipLabel: {
			type: String,
			default: ''
		},
		tooltipPosition: {
			type: String,
			default: 'Bottom'
		},
		top: {
			type: Boolean,
			deafult: false
		},
		right: {
			type: Boolean,
			deafult: false
		},
		bottom: {
			type: Boolean,
			deafult: false
		},
		left: {
			type: Boolean,
			deafult: false
		},
		cssClass: {
			type: String,
			default: ''
		}
	},
	computed: {
		getTooltipPosition: () => {
			if (this.tooltipPosition === 'top') {
				this.top = true
			} else if (this.tooltipPosition === 'right') {
				this.right = true
			} else if (this.tooltipPosition === 'bottom') {
				this.bottom = true
			} else if (this.tooltipPosition === 'left') {
				this.left = true
			}

		}
	}
}
</script>

<style scoped>

</style>
