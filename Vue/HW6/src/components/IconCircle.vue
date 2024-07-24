<template>
  <span class="link-icon-wrapper">
    <svg v-if="isArrow" width="8" height="18" viewBox="0 0 10.004 20.0082" fill="none">
      <path
        d="M1 19L9 10L1 1"
        stroke="currentColor"
        stroke-opacity="1.000000"
        stroke-width="2.000000"
        stroke-linejoin="currentColor"
        stroke-linecap="round"
      />
    </svg>
    <span v-else>{{ num }}</span>
  </span>
</template>

<script>
export default {
  name: 'IconCircle',
  props: {
    isArrow: {
      type: Boolean,
      default: false
    },
    num: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"></style>
