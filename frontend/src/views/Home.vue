<template>
  <div class="home-wrapper">
    <h2>Wellcome to <i>Pizza Time</i></h2>
    <SearchInput />
    <PizzaItem v-for="n in 10" @click="goToPizza"/>
    <PizzaPopup v-if="isPopupOpen" @closePopup="closePopup" />
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import PizzaItem from '../components/PizzaItem.vue';
  import SearchInput from '../components/SearchInput.vue';
  import PizzaPopup from '../components/PizzaPopup.vue';
  import router from '../router';

  let isPopupOpen: Ref<Boolean> = ref(false);

  const goToPizza = (): void => {
    if ( window.innerWidth <= 500 ) {
      router.push('/pizza');
    } else {
      isPopupOpen.value = true;
      document.body.style.overflow = 'hidden';
    }
  };

  const closePopup = () => {
    isPopupOpen.value = false;
    document.body.style.overflow = 'auto';
  }

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