<template>
  <div class="order-popup-wrapper" @click="closePopup">
    <div @click.stop class="order-content-wrapper">
      <div class="close-wrap">
        <span @click="closePopup" class="material-symbols-outlined">
          close
        </span>
      </div>
      <div class="order-title">
        <h2>Personal Details</h2>
      </div>
      <div class="inputs-wrap">
        <div class="single-input">
          <span>First name</span>
          <BaseInput name="First name" @inputVal="assignVal($event, 'name')"/>
        </div>
        <div class="single-input">
          <span>Last name</span>
          <BaseInput name="Last name" @inputVal="assignVal($event, 'lastname')"/>
        </div>
        <div class="single-input">
          <span>Phone Number</span>
          <BaseInput name="Phone Number" @inputVal="assignVal($event, 'phone')"/>
        </div>
        <div class="single-input">
          <span>Address</span>
          <BaseInput name="Address" @inputVal="assignVal($event, 'address')"/>
        </div>
        <div class="btn-wrap">
          <button @click="cancel" class="btn ">Cancel</button>
          <button @click="confirm" class="btn fill">Confirm Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import BaseInput from '../components/BaseInput.vue';

  const emit = defineEmits([
    'closePopup',
  ]);

  let user: {
    name: Ref<string>,
    lastname: Ref<string>,
    phone: Ref<string>,
    address: Ref<string>,
    } = {
    name: ref(''),
    lastname: ref(''),
    phone: ref(''),
    address: ref(''),
  };

  const assignVal = (payload: string, identifier: keyof typeof user): void => {
    user[identifier].value = payload;
  }

  const closePopup = (): void => {
    emit('closePopup');
  }

  const cancel = (): void => {
    emit('closePopup');
  }

  const confirm = (): void => {
    alert('Order confirmed!');
    emit('closePopup');

    // console.log(user.name.value);
  }

</script>

<style scoped lang="scss">
@use '../styles/_mixins.scss';
.order-popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .order-content-wrapper {
    width: 20%;
    height: 90%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    overflow-y: scroll;

    .close-wrap {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;

      .material-symbols-outlined {
        font-size: 30px;
        cursor: pointer;
      }
    }

    .order-title {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .inputs-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;

      .single-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        span {
          margin-bottom: 5px;
        }
      }

      .btn-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .btn {
          @include mixins.btn-style(160px, #fff, 1px solid, #7b9728);
          cursor: pointer;
        }

        .fill {
          @include mixins.btn-style(160px, #7b9728, none, #fff);
        }
      }
    }
  }
}
</style>