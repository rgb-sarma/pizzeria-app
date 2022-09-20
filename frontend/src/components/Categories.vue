<template>
  <div class="categories-wrapper">
    <div @click="setCategory(`order`)" class="single-category">
      <div class="img-wrap">
        <img src="../assets/bill.png" alt="">
      </div>
      <span>Orders</span>
      <span class="material-symbols-outlined">
        chevron_right
      </span>
    </div>
    <div @click="setCategory(`pizza`)" class="single-category">
      <div class="img-wrap">
        <img src="../assets/pizza.png" alt="">
      </div>
      <span>Pizzas</span>
      <span class="material-symbols-outlined">
        chevron_right
      </span>
    </div>
    <div @click="setCategory(`topping`)" class="single-category">
      <div class="img-wrap">
        <img src="../assets/pizzaslice.png" alt="">
      </div>
      <span>Toppings</span>
      <span class="material-symbols-outlined">
        chevron_right
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

  const emit = defineEmits([
    'setCategory',
  ]); 

  const setCategory = (category: String): void => {
    emit('setCategory', category);
  }

</script>

<style scoped lang="scss">
.categories-wrapper {
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img-wrap {
    height: 30px;
    img {
      height: 100%;
    }
  }

  .single-category {
    width: calc(80% - 30px);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 0 15px;
    cursor: pointer;

  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
    }
  }
}
</style>