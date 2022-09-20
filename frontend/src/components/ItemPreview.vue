<template>
  <div class="pizza-preview-wrapper">
    <div class="heading">
      <div class="img-wrap">
        <img src="../assets/test-img.jpeg" alt="">
      </div>
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
        <div class="desc-area">
          <span class="description">Description:</span>
          <textarea placeholder="Enter description" maxlength="255" spellcheck="false"></textarea>
        </div>        
      </div>
    </div>
    <div class="toppings-wrapper">
      <div class="title">
        <h3>Available toppings</h3>
      </div>
      <div class="checkboxes">
        <div v-for="n in 20" class="single-checkbox">
          <input type="checkbox" :id="n.toString()+`top`">
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
            <input type="checkbox" :id="n.toString()+`alg`">
            <label :for="n.toString()+`alg`">{{ n }} allegen</label>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="sizes">
        <div class="title">
          <h3>Available sizes</h3>
        </div>
        <div class="checkboxes">
        <div v-for="n in 3" class="single-checkbox">
          <input type="checkbox" :id="n.toString()+`size`">
          <label :for="n.toString()+`size`">{{ n }} size:</label>
          <BaseInput :name="`price for `+n.toString()+` size`"/>
        </div>
      </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <button @click="callApi" class="btn">Save Changes</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';

const callApi = (): void => {
  console.log('callApi');
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
  }
}
</style>