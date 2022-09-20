<template>
  <div class="order-wrap">
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
    </div>
    <div class="btn-wrap">
      <button @click="cancel" class="btn ">Cancel</button>
      <button @click="confirm" class="btn fill">Confirm Order</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import BaseInput from '../components/BaseInput.vue';
import router from '../router';

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

  const cancel = (): void => {
    router.push('/');
  }

  const confirm = (): void => {
    alert('Order confirmed!');

    // console.log(user.name.value);
  }

</script>

<style scoped lang="scss">
@use '../styles/_mixins.scss';

.order-wrap {
  width: calc(100% - 20px);
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inputs-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    .single-input {
      margin-bottom: 20px;
    }
  }

  .btn-wrap {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;

    .btn {
      @include mixins.btn-style(160px, #fff, 1px solid, #7b9728);
      margin-top: 20px;
      font-size: 16px;
    }
    .fill {
      @include mixins.btn-style(160px, #7b9728, none, #fff);
    }
  }
}
</style>