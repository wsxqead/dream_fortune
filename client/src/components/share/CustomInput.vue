<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: 'custom-input'
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  watch: {
    inputValue(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>


<style scoped>
.custom-input {
  width: 100%;
  padding: .5rem;
  margin: .5rem 0;
  box-sizing: border-box;
  height: 2.5rem;
  border-radius: .5rem;
  border: 1px solid #dee2e6;
}
</style>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :class="customClass" v-model="inputValue" />
  </div>
</template>
