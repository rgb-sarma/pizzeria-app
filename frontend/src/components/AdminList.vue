<template>
  <div class="list-wrapper">
    <div v-if="!props.isOrder" @click="editItem" class="create-item">
      + Create new {{ props.contentType }}
    </div>
    <div class="item-list">
      <div v-for="n in 15" class="single-item" @click="toogleOrder(n)">
        <div  class="item-info">
          <div class="item-name">
            {{ props.contentType }} Name
          </div>
          <div class="item-actions">
            <span v-if="status != 'rejected'" @click.stop="editItem" class="material-symbols-outlined green">
              {{ props.isOrder ? 'done' : 'edit' }}
            </span>
            <span v-if="status != 'accepted'" @click.stop="deleteItem" class="material-symbols-outlined">
              {{ props.isOrder ? 'close' : 'delete' }}
            </span>
          </div>
        </div>
        <div v-show="props.isOrder && openOrders.includes(n)" class="order-details">
          <div class="personal-info">
            <span>Name</span>
            <span>Lastname</span>
            <span>Address</span>
            <span>Phone</span>
          </div>
          <div class="pizza-info">
            <span>Pizza Name</span>
            <span>Topping Topping Topping</span>
            <span>Size</span>
            <span>Price</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

  const props = defineProps({
    isOrder: {
      type: Boolean,
      required: false,
      default: false,
    },
    contentType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  })

  let openOrders: Ref<number[]> = ref([]);

  const emit = defineEmits([
    'editItem',
    'deleteItem',
  ]); 

  const toogleOrder = (id: number): void => {
    if (props.isOrder) {
      if (openOrders.value.includes(id)) {
        openOrders.value = openOrders.value.filter((n) => n !== id);
      } else {
        openOrders.value.push(id);
      }
    }
  }

  const editItem = (): void => {
    //check status before doing logic for buttons
    if (props.isOrder) {
      alert('Accepted');
    } else {
      // alert('Edit');
      emit('editItem');
    }
  }

  const deleteItem = (): void => {
    if (props.isOrder) {
      alert('Rejected');
    } else {
      // alert('Delete');
      emit('deleteItem');
    }
  }

</script>

<style scoped lang="scss">
.list-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .create-item {
    width: 40%;
    height: 60px;
    background-color: #7b9728;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .item-list {
    width: 40%;
    max-height: 630px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .single-item {
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      // align-items: center;
      padding: 0 10px;
      width: calc(100% - 20px);
      // min-height: 60px;
      // height: 60px;
      background-color: #f1f1f1;
      margin-bottom: 10px;
      border-radius: 10px;
      cursor: pointer;
      .item-info {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .item-name {
          // width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
          font-weight: bold;
        }
  
        .item-actions {
          display: flex;
          justify-content: space-between;
          width: 60px;
          .material-symbols-outlined {
            cursor: pointer;
            &:hover {
              color: #ef223c;
            }
  
            font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48
          }
          .green {
            &:hover {
              color: #7b9728;
            }
          }
        }

      }
      .order-details {
        width: 100%;
        min-height: 100px;
        display: flex;
        flex-direction: row;

        .personal-info {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pizza-info {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .list-wrapper {
    .create-item {
      width: 80%;
    }
    .item-list {
      width: 80%;
      max-height: 400px;
    }
  }
}

@media (max-width: 500px) {
  .list-wrapper {
    .create-item {
      width: 90%;
      font-size: 1.2em;
    }
    .item-list {
      width: 90%;
      .single-item {
        .item-info {
          .item-name {
            font-size: 1.2em;
          }
        }

        .order-details {
          padding-bottom: 10px;
          flex-direction: column;
        }
      }
    }
  }
}

</style>