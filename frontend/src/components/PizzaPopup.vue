<template>
  <div class="pizza-popup-wrapper" @click="closePopup">
    <div @click.stop class="pizza-content-wrapper">
      <div class="close-wrap">
        <span @click="closePopup" class="material-symbols-outlined">
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
        <div class="toppings-section">
          <h3>Toppings</h3>
          <div class="toppings-wrapper">
            <div class="single-topping" v-for="n in 10">
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
        <div class="sizes-section">
          <h3>Sizes</h3>
          <div class="sizes-wrapper">
            <div class="single-size" v-for="n in 4">
              <label class="custom-label" :class="{'selected': selectedSize === n}" :for="`size${n}`">
                <div class="size-info">
                  <div class="size-name">
                    Ime Velicine
                  </div>
                  <div class="size-price">
                    +69$
                  </div>
                </div>
              </label>
              <input type="radio" :id="`size${n}`" :value="n" v-model="selectedSize" >
            </div>
          </div>
          <div class="price-wrap">
            <span>Price:</span>
            <span>2000$ + 1.5$(delivery) = 3500$</span>
          </div>
          <div class="btn-wrap">
            <button @click="closePopup" class="btn">Cancel Order</button>
            <button class="btn fill">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue';

  let checkedToppings: Ref<Array<number>> = ref([]);
  let selectedSize: Ref<number> = ref(0);

  const emit = defineEmits([
    'closePopup'
  ]);

  const closePopup = (): void => {
    emit('closePopup');
  }

</script>

<style scoped lang="scss">
@use '../styles/_mixins.scss';

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
      // flex-direction: column;
      justify-content: space-between;
      // height: 100%;
      height: calc(100% - 250px);
      .toppings-section {
        width: 60%;
        h3 {
          width: 100%;
        }
        display: flex;
        flex-direction: column;
        
        .toppings-wrapper {

          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          max-height: 300px;
          overflow-y: auto;
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
  
              min-width: 220px;
              max-width: 250px;
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
      .sizes-section {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;

        .sizes-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          height: 30%;
          .single-size {
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

              min-width: 190px;
              max-width: 250px;
              height: 50px;
              border-radius: 10px;
              margin-right: 10px;
              box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.29);
              &:hover {
                cursor: pointer;
              }
              .size-info {
                width: 100%;
                padding: 0 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;

              }

            }
            .selected {
              box-shadow: none;
              border: 1px solid green;
            }
          }

          }

        .price-wrap {
          width: 90%;
          height: 20%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          font-weight: bold;
        }

        .btn-wrap {
          margin-top: 20px;

          display: flex;
          justify-content: space-between;

          .btn {
            @include mixins.btn-style(160px, #fff, 1px solid, #7b9728);       
          }
          .fill {
            @include mixins.btn-style(160px, #7b9728, none, #fff);       
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .pizza-popup-wrapper {
    .pizza-content-wrapper {
      width: 90%;
      height: 90%;
      .header-wrap {
        height: 200px;
        .img-wrap {
          height: 200px;
          width: 200px;
          margin-right: 10px;
        }
        .title-text-wrap {
          p {
            max-width: 100%;
          }
        }
      }
      .adds-wrap {
        height: calc(100% - 250px);
        .toppings-section {
          width: 70%;
          .toppings-wrapper {
            .single-topping {
              .custom-label {
                min-width: 100%;
                max-width: 100%;
              }
            }
          }
        }
        .sizes-section {
          width: 100%;
          .sizes-wrapper {
            gap: 10px;
            .single-size {
              .custom-label {
                min-width: 100%;
                max-width: 100%;
              }
            }
          }
          .price-wrap {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>