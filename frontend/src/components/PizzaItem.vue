<template>
  <div class="pizza-item-wrapper">
    <div class="pizza-item">
      <div class="pizza-item-image">
        <img src="../assets/test-img.jpeg" alt="pizza" />
      </div>
      <div class="pizza-item-info">
        <div class="pizza-item-name">
          <h3>{{ name }}</h3>
        </div>
        <div class="pizza-item-description">
          <p>{{ description }}</p>
        </div>
        <div class="pizza-item-price">
          <p>$ {{ price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const name: string = 'Pizza';
const description: string = 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients...';
const price: number = 1000.41;


</script>

<style scoped lang="scss">
.pizza-item-wrapper {
  width: 680px;
  height: 140px;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fcf8f8;
  &:hover {
      cursor: pointer;
      scale: 1.05;
    }
  .pizza-item {
    display: flex;
    flex-direction: row;
    
    .pizza-item-image {
      height: 140px;
      img {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        height: 100%;
      }
    }
    .pizza-item-info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 140px;
      width: calc(100% - 30px);
      margin-left: 10px;
      padding-right: 20px;
      .pizza-item-name {
        h3 {
          margin: 0;
          // margin-top: 10px;
        }
      }
      .pizza-item-description {
        p {
          margin: 0;
          // margin-top: 10px;
        }
      }
      .pizza-item-price {
        display: flex;
        justify-content: flex-end;
        p {
          margin: 0;
          // margin-top: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .pizza-item-wrapper {
    width: 90%;
    .pizza-item {
      .pizza-item-info {
        .pizza-item-description {
          p {
            font-size: 14px;
            max-width: 190px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>