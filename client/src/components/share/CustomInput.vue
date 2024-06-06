<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "custom-input",
    },
    error: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    validate() {
      this.$emit("validate", this.inputValue);
    },
  },
};
</script>

<style scoped>
.custom-input {
  width: 100%;
  padding: 1.25rem;
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
    <input
      :type="type"
      :id="id"
      :class="customClass"
      :value="value"
      @input="handleInput"
      @blur="validate"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>
