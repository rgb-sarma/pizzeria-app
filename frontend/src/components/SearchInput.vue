<template>
  <div class="search-wrapper">
    <span class="material-symbols-outlined search">
      search
    </span>
    <input class="search-input" placeholder="Search for a pizza" @input="search" v-model="searchTerm" type="text">
    <span class="material-symbols-outlined close" @click="clear">
      close
    </span>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

let searchTerm: Ref<String> = ref('');
let isSearchCalled: Ref<Boolean> = ref(false);

const clear = (): void => {
  console.log('clear');
  console.log(searchTerm.value);
  searchTerm.value = '';
}

const search = (): void => {
  if(!isSearchCalled.value) {
    isSearchCalled.value = true;
    setTimeout(() => {
      isSearchCalled.value = false;
      if (searchTerm.value.length > 0) {
        console.log(searchTerm.value);
        // router.push('/search/' + searchTerm.value);
      }
    }, 1000);
  }
}

</script>

<style scoped lang="scss">
.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .material-symbols-outlined {
    position: relative;
    left: 32px;
    color: #ccc;
    font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24
  }

  .search {
    pointer-events: none;
  }
  .close {
    left: -32px;
    &:hover {
      cursor: pointer;
    }
  }
  .search-input {
    width: calc(340px - 35px);
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0 10px;
    padding-left: 35px;
    color: #333;
    font-size: 16px;

    &:focus {
      border: 2px solid yellow;
    }

    &::placeholder {
      font-size: 16px;
      color: #ccc;
      font-weight: normal;
      font-style: italic;
    }
  }
}

@media screen and (max-width: 480px) {
  .search-wrapper {
    .search-input {
      width: 90%;
    }
  }
}
</style>