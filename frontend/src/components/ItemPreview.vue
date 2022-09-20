<template>
  <div class="pizza-preview-wrapper">
    <div class="heading">
      <div class="img-wrap">
        <img src="../assets/test-img.jpeg" alt="">
      </div>
      <input type="file" @change="addImg($event)" accept="image/png, image/jpeg" >
      <div class="info-fields">
        <div class="inputs">
          <div class="single-input">
            <span class="label name">Pizza Name: </span>
            <BaseInput name="pizza name"/>
          </div>
          <div class="single-input">
            <span class="label price">Price: </span>
            <BaseInput name="pizza price" type="number"/>
          </div>
        </div>
        <div v-if="!props.isTopping" class="desc-area">
          <span class="description">Description:</span>
          <textarea placeholder="Enter description" maxlength="255" spellcheck="false"></textarea>
        </div>        
      </div>
    </div>
    <div v-if="!props.isTopping" class="toppings-wrapper">
      <div class="title">
        <h3>Available toppings</h3>
      </div>
      <div class="checkboxes">
        <div v-for="n in 12" class="single-checkbox">
          <input type="checkbox" :id="n.toString()+`top`" v-model="toppings">
          <label :for="n.toString()+`top`">{{ n }} topping</label>
        </div>
      </div>
    </div>
    <div class="options-wrapper">
      <div class="allergens">
        <div class="title">
          <h3>Available allegens</h3>
        </div>
        <div class="checkboxes">
          <div v-for="n in 7" class="single-checkbox">
            <input type="checkbox" :id="n.toString()+`alg`" v-model="allergens">
            <label :for="n.toString()+`alg`">{{ n }} allegen</label>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div v-if="!props.isTopping" class="sizes">
        <div class="title">
          <h3>Available sizes</h3>
        </div>
        <div class="checkboxes">
        <div v-for="n in 4" class="single-checkbox">
          <input type="checkbox" :id="n.toString()+`size`" v-model="sizes">
          <label :for="n.toString()+`size`">{{ n }} size:</label>
          <BaseInput :name="`price for `+n.toString()+` size`"/>
        </div>
      </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <button @click="back" class="btn outline">Back</button>
      <button @click="callApi" class="btn">Save Changes</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import BaseInput from './BaseInput.vue';

let img: Ref<any> = ref(null);
let toppings: Ref<string[]> = ref([]);
let allergens: Ref<string[]> = ref([]);
let sizes: Ref<string[]> = ref([]);

const emit = defineEmits([
  'backToList',
]);


const props = defineProps({
  isTopping: {
    type: Boolean,
    required: false,
  },
});

const callApi = (): void => {
  console.log('callApi');
}

const back = (): void => {
  emit('backToList');
}

const addImg = (event: any): void => {
  img = event.target.files[0];
  console.log(img);
}

</script>

<style scoped lang="scss">
@use '../styles/_mixins.scss';
.pizza-preview-wrapper {
  height: calc(100vh - 80px);
  padding: 10px 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;


  .heading {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;

    .img-wrap {
      height: 200px;
      margin-right: 20px;
      img {
        height: 100%;
      }
    }

    .info-fields {
      // width: 100%;
      .inputs {
        .single-input {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 5px;

          .label {
            margin-right: 10px;
          }
        }
      }

      .desc-area {
        display: flex;
        flex-direction: column;

        textarea {
          width: 750px;
          height: 74px;
          resize: none;
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
          border-radius: 10px;
          border: 1px solid #ccc;
          padding: 5px 10px;
          color: #062931;
          font-size: 16px;

          &::placeholder {
            font-size: 16px;
            color: #ccc;
            font-weight: normal;
            font-style: italic;
          }
        }
      }
    }
  }

  .toppings-wrapper {
    .checkboxes {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      // align-items: center;
      // height: 100px;
      // margin-top: 20px;
      .single-checkbox {
        margin: 5px;
      }
    }
  }

  .options-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    // align-items: center;
    justify-content: space-between;

    .allergens {
      max-width: 49%;
      .checkboxes {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        // align-items: center;
        // height: 100px;
        // margin-top: 20px;
        .single-checkbox {
          margin: 5px;
        }
      }
    }

    .divider {
      width: 1px;
      height: 100%;
      background-color: #000;
    }
    .sizes {
      max-width: 49%;
      .checkboxes {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        // align-items: center;
        // height: 100px;
        // margin-top: 20px;
        .single-checkbox {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 5px;

          label {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    .btn {
      @include mixins.btn-style(160px, #7b9728, none, #fff);
    }

    .outline {
      @include mixins.btn-style(160px, #fff, 1px solid, #7b9728);
      margin-right: 10px;
    }
  }
}

@media screen and (max-width: 768px) {
  .pizza-preview-wrapper {
    .heading {
      flex-direction: column;
      height: auto;

      .img-wrap {
        margin-bottom: 20px;
      }

      .info-fields {
        .inputs {
          .single-input {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 10px;

            .label {
              margin-right: 0;
              margin-bottom: 5px;
            }
          }
        }

        .desc-area {
          textarea {
            width: 100%;
          }
        }
      }
    }

    .options-wrapper {
      flex-direction: column;

      .allergens {
        max-width: 100%;
        margin-bottom: 20px;
      }

      .divider {
        display: none;
      }

      .sizes {
        max-width: 100%;
      }
    }
  }
}
</style>