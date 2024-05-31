<script>
export default {
  name: 'CustomSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    customClass: {
      type: String,
      default: 'custom-select'
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedValue: this.value
    };
  },
  watch: {
    selectedValue(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style scoped>
.custom-select {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  box-sizing: border-box;
  height: 2.5rem;
  border-radius: 0.5rem;
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
    <select :id="id" :class="customClass" v-model="selectedValue" @change="$emit('change', selectedValue)">
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>