<template>
	<div class="container">
		<h4>History</h4>
		<div class="flex">
			<p
				v-for="(num, index) in history"
				:class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
				:key="index"
			>
				{{ num }}
			</p>
		</div>
		<input type="number" v-model="value" placeholder="search by index" />
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	name: 'component1',
	components: {},
	data() {
		return {
			value: 0,
		};
	},
	computed: {
		...mapState(['history']),
		...mapGetters(['activeIndexes']),
	},
};
</script>

<style>
.container {
	margin-top: 7rem;
}

.flex {
	display: flex;
	text-align: center;
	width: 25rem;
	justify-content: center;
	flex-wrap: wrap;
}

.flex p {
	margin: 1rem;
}

.bold {
	font-weight: 900;
}
</style>
