<template>
  <div class="tags">
    <h5 class="tags__title">Тэги</h5>
    <ul class="tags__list">
      <li v-for="item in tags" :key="item.id">
        <ButtonBlacked
          @click="filterByTag(item)"
          class="tags__button"
          :class="{ tags__active: selectedTag === item }"
        >
          {{ item }}
        </ButtonBlacked>
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonBlacked from './ButtonBlacked.vue'

export default {
  name: 'TagsList',
  props: {
    tags: {
      type: Array
    },
    selectedTag: {
      type: String
    }
  },
  emits: ['filter-tag'],
  methods: {
    filterByTag(tag) {
      this.$emit('filter-tag', tag)
    }
  },
  components: {
    ButtonBlacked
  }
}
</script>

<style scoped lang="scss"></style>
