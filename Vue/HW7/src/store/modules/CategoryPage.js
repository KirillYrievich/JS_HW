export default {
  namespaced: true,
  state: {
    pageHeader: {
      title: 'Наш проект',
      links: [
        {
          label: 'Домой',
          link: './index.html'
        },
        {
          label: 'Проект',
          link: './project.html'
        }
      ]
    },
    projects: {
      articles: [
        {
          id: 1,
          title: 'Современная кухня',
          image: '/img/kitchen1.png',
          link: '#',
          category: ['Кухня']
        },
        {
          id: 2,
          title: 'Современная Гостинная',
          image: '/img/kitchen2.png',
          link: '#',
          category: ['Гостинная']
        },
        {
          id: 3,
          title: 'Современная Гостинная',
          image: '/img/kitchen3.png',
          link: '#',
          category: ['Гостинная']
        },
        {
          id: 4,
          title: 'Современная Гостинная',
          image: '/img/kitchen4.png',
          link: '#',
          category: ['Гостинная']
        },
        {
          id: 5,
          title: 'Комфортная Ванная комната',
          image: '/img/bathroom1.jpg',
          link: '#',
          category: ['Ванная комната']
        },
        {
          id: 6,
          title: 'Комфортная Ванная комната',
          image: '/img/bathroom2.jpg',
          link: '#',
          category: ['Ванная комната']
        },
        {
          id: 7,
          title: 'Комфортная Ванная комната',
          image: '/img/bathroom3.jpg',
          link: '#',
          category: ['Ванная комната']
        },
        {
          id: 8,
          title: 'Комфортная Ванная комната',
          image: '/img/bathroom4.jpeg',
          link: '#',
          category: ['Ванная комната']
        },
        {
          id: 9,
          title: 'Комфортная Ванная комната',
          image: '/img/bathroom5.jpg',
          link: '#',
          category: ['Ванная комната']
        },
        {
          id: 10,
          title: 'Минималистичная спальня',
          image: '/img/spalna1.png',
          link: '#',
          category: ['Спальня']
        },
        {
          id: 11,
          title: 'Минималистичная спальня',
          image: '/img/spalna2.png',
          link: '#',
          category: ['Спальня']
        },
        {
          id: 12,
          title: 'Минималистичная спальня',
          image: '/img/spalna3.png',
          link: '#',
          category: ['Спальня']
        },
        {
          id: 13,
          title: 'Минималистичная спальня',
          image: '/img/spalna4.png',
          link: '#',
          category: ['Спальня']
        }
      ],
      selectedTabs: null
    },
    paginates: {
      paginateItems: [
        {
          label: '01',
          link: '#'
        },
        {
          label: '02',
          link: '#'
        },
        {
          label: '03',
          link: '#'
        }
      ],
      next: '#'
    }
  },
  mutations: {
    SET_SELECTED_TABS(state, tabs) {
      state.projects.selectedTabs = tabs
    }
  },
  actions: {
    filterByCategory({ commit }, category) {
      commit('SET_SELECTED_TABS', category)
    }
  },
  getters: {
    category(state) {
      return [...new Set(state.projects.articles.flatMap(a => a.category))]
    },
    filteredProjects(state) {
      return state.projects.selectedTabs
        ? state.projects.articles.filter(a => a.category.includes(state.projects.selectedTabs))
        : state.projects.articles
    }
  }
}
