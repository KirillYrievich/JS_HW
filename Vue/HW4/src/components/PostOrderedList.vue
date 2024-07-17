<template>
  <ol class="project__list">
    <li v-for="item in ordered" :key="item.id" class="project__item">{{ item }}</li>
  </ol>
</template>

<script>
export default {
  name: 'PostsList',
  props: {
    ordered: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss"></style>
