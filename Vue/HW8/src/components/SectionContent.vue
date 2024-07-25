<template>
  <section class="section container" :class="{ section__column: isColumn }">
    <header v-if="title" class="section__header">
      <h3 class="section__title">{{ title }}</h3>
      <div class="section__description">
        <p>{{ description }}</p>
      </div>
    </header>
    <header v-else-if="subtitle" class="section__subheader">
      <h3 class="section__title">{{ subtitle }}</h3>
    </header>
    <div v-if="showTabsList" class="section__tablist">
      <slot name="tabList"></slot>
    </div>
    <div class="section__body">
      <slot></slot>
    </div>
    <div v-if="showPagination" class="section__paginate">
      <slot name="paginate"></slot>
    </div>
    <div v-if="showTags" class="section__tags">
      <slot name="tag"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionContent',
  props: {
    isColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    showPagination: {
      type: Boolean,
      default: false
    },
    showTags: {
      type: Boolean,
      default: false
    },
    showTabsList: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss"></style>
