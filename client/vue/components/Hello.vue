<template>
	<div>
		<h1>Hello from {{ location }}!</h1>
	</div>
</template>

<script>
	export default {
		name: 'Hello',
		data() {
			return {
				location: 'Vue'
			}
		}
	}
</script>

<style scoped>
	h1 {
		background-color: black;
		color: white;
	}
</style>