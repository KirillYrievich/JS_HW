<template>
  <div class="tabslist">
    <ul class="tabslist__list">
      <li v-for="(item, index) in category" :key="index">
        <ButtonBlacked
          @click="filterByCategory(item)"
          class="tabslist__button"
          :class="{ tabslist__active: selectedTabs === item }"
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
  name: 'TabsList',
  props: {
    category: {
      type: Array,
      required: true
    },
    selectedTabs: {
      type: String
    }
  },
  emits: ['filter-category'],
  methods: {
    filterByCategory(category) {
      this.$emit('filter-category', category)
    }
  },
  components: {
    ButtonBlacked
  }
}
</script>

<style scoped lang="scss"></style>
