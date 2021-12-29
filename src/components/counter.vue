<template>
	<h1>Vuex Counter</h1>
	<h2 class="counter">{{ counter }}</h2>
	<button @click="subtractFromCounter(value)">-</button>
	<input v-model="value" type="number" />
	<button @click="addToCounter(value)">+</button>
	<div>
		<button @click="addRandomNumber" class="btn">Add by Random Number</button>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	name: 'Counter',
	data() {
		return {
			value: 1,
		};
	},
	computed: {
		...mapState(['counter']),
	},

	methods: {
		...mapMutations(['addToCounter', 'subtractFromCounter']),
		...mapActions(['addRandomNumber']),
	},
};
</script>

<style>
.counter {
	font-size: 5rem;
}

button {
	border-radius: 100%;
	border: none;
	width: 2rem;
	height: 2rem;
	font-weight: 700;
	cursor: pointer;
}

input {
	padding: 0.4rem;
	margin: 0 0.5rem;
	text-align: center;
}

.btn {
	border-radius: 0.5rem;
	width: auto;
	background-color: #41b983;
	margin-top: 1rem;
	color: white;
	cursor: pointer;
}
</style>
