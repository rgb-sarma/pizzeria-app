<template>
  <div class="pizza-wrapper">
    <div class="header-wrap">
      <div class="title-img">
        <img src="../assets/test-img.jpeg" alt="">
      </div>
      <div class="title-text">
        <h2>Pizza Name</h2>
      </div>
      <div class="title-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam nobis est nisi sequi mollitia, eligendi dolores incidunt autem illo.</p>
      </div>
    </div>
    <div class="pizza-content">
      <div class="toppings-content">
        <div @click="toggleToppings" class="toppings-title">
          <h3>Toppings</h3>
          <span class="material-symbols-outlined">
            {{ showToppings ?  'expand_more' : 'expand_less' }}
          </span>
        </div>
        <div v-show="showToppings" class="toppings-wrapper">
          <div class="single-topping" v-for="n in 1">
            <label class="custom-label" :class="{'selected': checkedToppings.includes(n)}" :for="`topping${n}`">
              <div class="label-img-wrap">
                <img src="../assets/test-img.jpeg" alt="">
              </div>
              <div class="topping-info">
                <div class="topping-name">
                  Ime toppinga
                </div>
                <div class="topping-allergen">
                  <img src="../assets/mustard.png" alt="">
                </div>
                <div class="topping-price">
                  +69$
                </div>
              </div>
            </label>
            <input type="checkbox" :id="`topping${n}`" :value="n" v-model="checkedToppings" >
          </div>
        </div>
      </div>
      <div class="sizes-content">
        <div @click="toggleSizes" class="sizes-title">
          <h3>Sizes</h3>
          <span class="material-symbols-outlined">
            {{ showSizes ?  'expand_more' : 'expand_less' }}
          </span>
        </div>
        <div v-show="showSizes" class="sizes-wrapper">
          <div class="single-size" v-for="n in 2">
            <label class="custom-label" :class="{'selected': checkedSizes === n}" :for="`size${n}`">
              <div class="label-img-wrap">
                <img src="../assets/test-img.jpeg" alt="">
              </div>
              <div class="size-info">
                <div class="size-name">
                  Ime velicine
                </div>
                <div class="size-price">
                  +69$
                </div>
              </div>
            </label>
            <input type="radio" :id="`size${n}`" :value="n" v-model="checkedSizes" >
          </div>
        </div>
      </div>
      <hr>
      <div class="price-wrap">
        <div class="price">
          <h3>Price</h3>
          <h3>78$ + 1.5$(delivery) = 79.5$</h3>
        </div>
        <div class="btn-wrap">
          <button @click="cancel" class="btn ">Cancel</button>
          <button @click="confirmOrder" class="btn fill">Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import router from '../router';


  let showToppings: Ref<boolean> = ref(false);
  let checkedToppings: Ref<number[]> = ref([]);
  let showSizes: Ref<boolean> = ref(false);
  let checkedSizes: Ref<number> = ref(0);

  const toggleToppings = (): void => {
    showToppings.value = !showToppings.value;
  };

  const toggleSizes = (): void => {
    showSizes.value = !showSizes.value;
  };

  const cancel = (): void => {
    router.push({ name: 'Home' });
  };

  const confirmOrder = (): void => {
    // router.push({ name: 'Order' });
    console.log('order confirmed');
    
  };

</script>

<style scoped lang="scss">
@use '../styles/_mixins.scss';

.header-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;

  .title-img {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title-text {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 30px;
      font-weight: 600;
    }
  }

  .title-description {
    width: calc(100% - 20px);
    height: 100px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.pizza-content {
  padding: 0 10px;
  width: calc(100% - 20px);

  .toppings-content {
    width: 100%;
    .toppings-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .toppings-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;

      .single-topping {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;

        input {
          display: none;
        }

        .custom-label {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          border-radius: 10px;
          margin-right: 10px;
          box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.29);

          .label-img-wrap {
            height: 50px;
            margin-right: 10px;

            img {
              height: 100%;
              border-radius: 10px 0 0 10px;
            }
          }

          .topping-info {
            width: 100%;
            padding-right: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .topping-allergen {
              height: 35px;
              width: 35px;

              img {
                height: 100%;
              }
            }

            .topping-price {
              margin-left: 15px;
            }
          }
        }
        .selected {
          box-shadow: none;
          border: 1px solid green;
        }
      }
    }
    
  }

  .sizes-content {
    width: 100%;
    .sizes-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .sizes-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;

      .single-size {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;

        input {
          display: none;
        }

        .custom-label {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          border-radius: 10px;
          margin-right: 10px;
          box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.29);

          .label-img-wrap {
            height: 50px;
            margin-right: 10px;

            img {
              height: 100%;
              border-radius: 10px 0 0 10px;
            }
          }

          .size-info {
            width: 100%;
            padding-right: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .size-price {
              margin-left: 15px;
            }
          }
        }
        .selected {
          box-shadow: none;
          border: 1px solid green;
        }
      }
    }
  }
}

.price-wrap {
  width: calc(100% - 20px);
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .price {
    display: flex;
    justify-content: space-between;
  }

  .btn-wrap {
    display: flex;
    justify-content: space-between;

    .btn {
      @include mixins.btn-style(160px, #fff, 1px solid, #7b9728);       
    }
    .fill {
      @include mixins.btn-style(160px, #7b9728, 1px solid, #fff);       
    }
  }
}
</style>