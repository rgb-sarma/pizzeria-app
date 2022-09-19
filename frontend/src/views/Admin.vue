<template>
  <div class="admin-wrapper">
    <Categories />
    <div class="divider"></div>
    <div class="preview-item">
      <div v-if="!isViewing" class="no-item">
        Select an item to preview
      </div>
      <div v-else class="item-wrapper">
        <PizzaPreview />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Categories from "../components/Categories.vue";
import PizzaPreview from "../components/PizzaPreview.vue";

const isViewing: boolean = true;

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