<template>
  <div class="home-wrapper">
    <h2>Wellcome to <i>Pizza Time</i></h2>
    <SearchInput />
    <PizzaItem v-for="n in 10"/>
  </div>
</template>

<script setup lang="ts">
import PizzaItem from '../components/PizzaItem.vue';
import SearchInput from '../components/SearchInput.vue';

</script>

<style scoped lang="scss">
.home-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>