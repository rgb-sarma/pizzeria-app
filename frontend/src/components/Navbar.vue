<template>
  <div class="nav-wrapper">
    <div class="left-section" @click="goHome">
      <div class="logo">
        <img src="../assets/pizzatime-icon.png" alt="">
      </div>
      <h1 class="title">Pizza Time</h1>
    </div>
    <div v-if="debug" class="right-section">
      <a href="/login" class="login-link">Login </a>or continue as guest
    </div>
    <div v-else class="right-section">
      <span @click="$router.push('/admin')" class="material-symbols-outlined">
        person
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../router';

//temp login state
const debug: boolean = true;

const goHome = (): void => {
  router.push('/');
}
</script>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  .left-section {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 20px;
    &:hover {
      cursor: pointer;
    }

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 15px;
      img {
        height: 100%;
      }
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      color: #000;
      font-style: italic;
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    height: 100%;
    width: fit-content;
    margin-right: 20px;
    .login-link {
      white-space: pre;
      text-decoration: none;
      color: #333;
      font-weight: bold;
      font-style: italic;
    }

    .material-symbols-outlined {
      font-size: 30px;
      &:hover {
        cursor: pointer;
      }
      font-variation-settings:
      'FILL' 1,
      'wght' 500,
      'GRAD' 0,
      'opsz' 24
    }
  }
}

@media screen and (max-width: 480px) {
  .nav-wrapper {
    .left-section {
      .logo {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .title {
        font-size: 18px;
      }
    }
    .right-section {
      font-size: 14px;
      .login-link {
        font-size: 14px;
      }
    }
  }
}
</style>