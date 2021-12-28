<template>
	<div class="home"></div>
	<Component1 />
</template>

<script>
// @ is an alias to /src
import Component1 from '../components/component1.vue';
export default {
	name: 'Home',
	components: { Component1 },
};
</script>
