<template>
  <div class="login-wrapper">
    <h3>
      LOGIN
    </h3>
    <div class="inputs-wrapper">
      <BaseInput name="Pictures of spiderman" @inputVal="debug"/>
      <BaseInput name="Pictures of spiderman feet" type="password" @inputVal="debug($event, 1)"/>
    </div>
    <button class="btn" @click="callApi">Log In</button>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref} from 'vue';
import BaseInput from '../components/BaseInput.vue';

let user: {
  name: String,
  password: String
} = {
  name: '',
  password: ''
};

const debug = (payload: String, identifier: number = 0): void => {
  if (identifier === 0) {
    user.name = payload;
  } else {
    user.password = payload;
  }
}

const callApi = (): void => {
  console.log(user);
}

</script>

<style scoped lang="scss">
@use '../styles/_mixins.scss';
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-top: 20px;
  }

  .btn {
    @include mixins.btn-style(340px);
    margin-top: 20px;
    font-size: 16px;
  }

  p {
    margin-bottom: 20px;
  }
}
</style>