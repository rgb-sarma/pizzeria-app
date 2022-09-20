<template>
  <div class="home-wrapper">
    <h2>Wellcome to <i>Pizza Time</i></h2>
    <SearchInput />
    <PizzaItem v-for="n in 10" @click="goToPizza"/>
    <PizzaPopup v-if="showPizzaDetails" @closePopup="closePopup" @confirmOrder="confirmOrder"/>
    <ConfirmOrderPopup v-if="showOrderConfirm" @closePopup="closeOrder"/>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import PizzaItem from '../components/PizzaItem.vue';
  import SearchInput from '../components/SearchInput.vue';
  import PizzaPopup from '../components/PizzaPopup.vue';
  import router from '../router';
  import ConfirmOrderPopup from '../components/ConfirmOrderPopup.vue';

  let showPizzaDetails: Ref<Boolean> = ref(false);
  let showOrderConfirm: Ref<Boolean> = ref(false);

  const goToPizza = (): void => {
    if ( window.innerWidth <= 500 ) {
      router.push('/pizza');
    } else {
      showPizzaDetails.value = true;
      document.body.style.overflow = 'hidden';
    }
  };

  const closePopup = () => {
    showPizzaDetails.value = false;
    document.body.style.overflow = 'auto';
  }

  const closeOrder = () => {
    showOrderConfirm.value = false;
    document.body.style.overflow = 'auto';
  }

  const confirmOrder = () => {
    closePopup();
    showOrderConfirm.value = true;
    document.body.style.overflow = 'hidden';
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