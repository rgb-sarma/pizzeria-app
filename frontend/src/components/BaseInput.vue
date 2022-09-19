<template>
  <div class="base-input-wrapper">
    <input 
      class="base-input" 
      :disabled="props.disabled" 
      v-model="inputVal" 
      @input="sendValue" 
      :placeholder="`Enter ${props.name}`" 
      :type="props.type">
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, defineEmits} from 'vue';

const emit = defineEmits([
  'inputVal'
]);
const props = defineProps({
  name: {
    type: String,
    default: 'value'
  },
  type: {
    type: String,
    default: 'text'
  },
  error: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

let inputVal: Ref<String> = ref('');
let isInputCalled: Ref<Boolean> = ref(false);

const sendValue = (): void => {  
  if(!isInputCalled.value) {
    isInputCalled.value = true;
    setTimeout(() => {
      isInputCalled.value = false;
      if (inputVal.value.length > 0) {
        emit('inputVal', inputVal.value);
        // router.push('/search/' + searchTerm.value);
      }
    }, 1000);
  }
}


</script>

<style scoped lang="scss">
.base-input-wrapper {
  

  .base-input {
    width: calc(340px - 20px);
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0 10px;
    color: #062931;
    font-size: 16px;

    &:disabled {
      border: none;
    }

    &::placeholder {
      font-size: 16px;
      color: #ccc;
      font-weight: normal;
      font-style: italic;
    }
  }
}
</style>