<template>
  <div class="admin-wrapper">
    <Categories v-if="calcShowCategories()" @setCategory="setCategory"/>
    <div class="divider"></div>
    <div class="preview-item">
      <div v-if="preview === 'order'" class="item-wrapper">
        <AdminList contentType="order" isOrder/>
      </div>
      <div v-if="preview === 'pizza'" class="item-wrapper">
        <AdminList v-if="!pizzaSelected" contentType="pizza" @editItem="setPizza"/>
        <ItemPreview @backToList="unsetPizza" v-else/>
      </div>
      <div v-if="preview === 'topping'" class="item-wrapper">
        <AdminList v-if="!toppingSelected" contentType="topping" @editItem="setTopping"/>
        <ItemPreview @backToList="unsetTopping" isTopping v-else/>
      </div>
      <div v-if="!preview" class="no-item">
        Select an item to preview
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Categories from "../components/Categories.vue";
import ItemPreview from "../components/ItemPreview.vue";
import AdminList from "../components/AdminList.vue";

  let preview: Ref<string> = ref('');
  // bice string umesto boolean
  let pizzaSelected: Ref<boolean> = ref(false);
  let toppingSelected: Ref<boolean> = ref(false);

  const setCategory = (payload: string): void => {
    preview.value = payload;
    
  }

  let isMobile: Ref<boolean> = ref(window.innerWidth <= 768);

  const setPizza = (payload: boolean): void => {
    // pizzaSelected.value = payload;
    pizzaSelected.value = true;
  }

  const unsetPizza = (payload: boolean): void => {
    // pizzaSelected.value = payload;
    pizzaSelected.value = false;
  }

  const setTopping = (payload: boolean): void => {
    // toppingSelected.value = payload;
    toppingSelected.value = true;
  }

  const unsetTopping = (payload: boolean): void => {
    // toppingSelected.value = payload;
    toppingSelected.value = false;
  }

  const calcShowCategories = (): boolean => {
    if (isMobile.value) {
      return !pizzaSelected.value && !toppingSelected.value;
    } else {
      return true
    }
  }

</script>

<style scoped lang="scss">
.admin-wrapper {
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .divider {
    min-height: calc(100vh - 60px);
    height: 100%;
    width: 1px;
    background-color: #7b9728;
  }

  .preview-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .no-item {
      font-size: 1.5em;
      font-weight: bold;
      color: #ccc;
    }

    .item-wrapper {
      width: calc(100% - 30px);
      padding: 0 15px;
    }
  }
}
</style>