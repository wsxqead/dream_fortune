<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      required: true
    },
    customClass: {
      type: String,
      default: 'custom-button'
    },
    value: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
  .custom-button {
    font-weight: 700;
    padding-left: 11rem;
    padding-right: 11rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    cursor: pointer;
    border-radius: .5em;
    background-color: #5d9aec;
    outline: none;
    border: 0;
  }
</style>

<template>
  <div>
    <button :type="type" :class="customClass" ><slot></slot></button>
  </div>
</template>


