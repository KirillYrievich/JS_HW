<template>
  <aside class="experiance">
    <section class="section container">
      <div class="section__body">
        <div class="experiance">
          <ul class="experiance__list">
            <li v-for="item in data" :key="item.id" class="experiance__item">
              <h1 class="experiance__title">{{ item.title }}</h1>
              <p class="experiance__text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'ExperianceJob',
  data() {
    return {
      data: [
        { title: '12', text: 'Лет опыта' },
        { title: '85', text: 'Успешных проектов' },
        { title: '15', text: 'Проектов в работе' },
        { title: '95', text: 'Счастливых клиентов' }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
