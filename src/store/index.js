import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state() {
		return {
			counter: 0,
			history: [],
		};
	},
	mutations: {
		addToCounter(state, payload) {
			state.counter = state.counter + payload;
			state.history.push(state.counter);
		},

		subtractFromCounter(state, payload) {
			state.counter = state.counter - payload;
			state.history.push(state.counter);
		},
	},
	getters: {
		activeIndexes: (state) => (payload) => {
			let indexes = [];
			state.history.forEach((number, index) => {
				if (number === payload) {
					indexes.push(index);
				}
			});
			return indexes;
		},
	},
	actions: {
		async addRandomNumber(context) {
			let data = await axios.get(
				'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'
			);
			context.commit('addToCounter', data.data);
		},
	},
	modules: {},
});
