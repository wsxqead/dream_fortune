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
    },
    error: {
      type: String,
      default: ''
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
  },
  methods: {
    validate() {
      this.$emit('validate', this.inputValue);
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
  .error-message {
    color: red;
    font-size: 0.875rem;
  }
</style>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :class="customClass" v-model="inputValue" @blur="validate" />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>