export default {
  namespaced: true,
  state: {
    posts: {
      articles: [
        {
          id: 1,
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабрь, 2022',
          tags: ['Кухня', 'Спальня'],
          image: '/img/maket1.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porroquisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          quote: 'Какая-то умная и красивая цитата',
          subnew: {
            title: 'Дизайн-спринт - это здорово',
            text: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
            ol: [
              'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
              'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
            ]
          }
        },
        {
          id: 2,
          title: 'Новость 2',
          date: '26 Декабрь, 2022',
          tags: ['Здание', 'Архитектура'],
          image: '/img/maket2.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 3,
          title: 'Новость 3',
          date: '26 Декабрь, 2022',
          tags: ['Кухня', 'Архитектура'],
          image: '/img/maket1.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 4,
          title: 'Новость 4',
          date: '26 Декабрь, 2022',
          tags: ['Здание', 'Архитектура'],
          image: '/img/maket2.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 5,
          title: 'Новость 5',
          date: '26 Декабрь, 2022',
          tags: ['Здание', 'Спальня'],
          image: '/img/maket1.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 6,
          title: 'Новость 6',
          date: '26 Декабрь, 2022',
          tags: ['Спальня', 'Планировка'],
          image: '/img/maket2.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 7,
          title: 'Новость 7',
          date: '26 Декабрь, 2022',
          tags: ['Здание', 'Кухня'],
          image: '/img/maket1.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 8,
          title: 'Новость 8',
          date: '26 Декабрь, 2022',
          tags: ['Планировка', 'Архитектура'],
          image: '/img/maket2.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 9,
          title: 'Новость 9',
          date: '26 Декабрь, 2022',
          tags: ['Кухня', 'Архитектура'],
          image: '/img/maket1.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        },
        {
          id: 10,
          title: 'Новость 10',
          date: '26 Декабрь, 2022',
          tags: ['Спальня', 'Планировка'],
          image: '/img/maket2.png',
          text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
          quote: '',
          subnew: {}
        }
      ],
      currentArticle: null,
      selectedTag: null
    }
  },
  mutations: {
    SET_SELECTED_TAG(state, tag) {
      state.posts.selectedTag = tag
    },
    SET_CURRENT_ARTICLE(state, article) {
      state.posts.currentArticle = article
    }
  },
  actions: {
    filterByTag({ commit }, tag) {
      commit('SET_SELECTED_TAG', tag)
    },
    setCurrentArticle({ commit }, article) {
      commit('SET_CURRENT_ARTICLE', article)
    }
  },
  getters: {
    tags(state) {
      return [...new Set(state.posts.articles.flatMap(a => a.tags))]
    },
    filteredPosts(state) {
      return state.posts.selectedTag
        ? state.posts.articles.filter(a => a.tags.includes(state.posts.selectedTag))
        : state.posts.articles
    }
  }
}
