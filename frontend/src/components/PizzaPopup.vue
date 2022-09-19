<template>
  <div class="pizza-popup-wrapper" @click="closePopup">
    <div @click.stop class="pizza-content-wrapper">
      <div class="close-wrap">
        <span class="material-symbols-outlined">
          close
        </span>
      </div>
      <div class="header-wrap">
        <div class="img-wrap">
          <img src="../assets/test-img.jpeg" alt="">
        </div>
        <div class="title-text-wrap">
          <h3>Pizza name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius temporibus odio iusto amet tempore minima, laboriosam nam error tempora excepturi, at in voluptates culpa voluptas dignissimos inventore accusamus nisi.</p>
          <div class="allergen-wrap">
            <div class="icon-wrap">
              <img src="../assets/fish.png" alt="">
            </div>
            <div class="icon-wrap">
              <img src="../assets/egg.png" alt="">
            </div>
            <div class="icon-wrap">
              <img src="../assets/gluten.png" alt="">
            </div>
            <div class="icon-wrap">
              <img src="../assets/milk.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="adds-wrap">
        <div class="toppings-wrap">
          <h3>Toppings</h3>
          <div class="single-topping">
            <label class="custom-label" for="topping1">
              <div class="label-img-wrap">
                <img src="../assets/test-img.jpeg" alt="">
              </div>
              <div class="topping-info">
                <div class="topping-name">
                  Ime
                </div>
                <div class="topping-price">
                  + 69$
                </div>
              </div>
            </label>
            <input type="checkbox" id="topping1" value="Topping 1" v-model="checkedToppings" >
          </div>
        </div>
        <div class="sizes-wrap"></div>
        <div class="btn-wrap"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue';

  let checkedToppings: Ref<Array<string>> = ref([]);

  const emit = defineEmits([
  'closePopup'
  ]);

  const closePopup = (): void => {
    emit('closePopup');
  }

</script>

<style scoped lang="scss">
.pizza-popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .pizza-content-wrapper {
    width: 50%;
    height: 70%;
    background-color: white;
    padding: 10px;
    border-radius: 10px;

    .close-wrap {
      display: flex;
      justify-content: flex-end;
      .material-symbols-outlined {
        font-size: 30px;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .header-wrap {
      display: flex;
      height: 200px;
      .img-wrap {
        height: 200px;
        width: 200px;
        margin-right: 10px;

        img {
          // height: 100%;
          width: 100%;
          border-radius: 10px;
        }
      }
      .title-text-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          max-width: 710px;
        }

        .allergen-wrap {
          display: flex;
          flex-direction: row;
          // justify-content: space-between;
          width: 100%;
          margin-top: 10px;

          .icon-wrap {
            width: 40px;
            height: 40px;
            // background-color: #f2f2f2;
            // border-radius: 50%;
            margin-right: 10px;
            img {
              width: 100%;
            }
          }
        }
      }
    }

    .adds-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100% - 200px);
      .toppings-wrap {
        display: flex;
        flex-direction: column;

        .single-topping {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 10px;

          input {
            display: none;
          }
          .custom-label {
            display: flex;
            align-items: center;

            width: 220px;
            height: 50px;
            border-radius: 10px;
            margin-right: 10px;
            box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.29);
            &:hover {
              cursor: pointer;
            }

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
            }
          }
        }
      }
      .sizes-wrap {
        display: flex;
        flex-direction: column;
      }
      .btn-wrap {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>