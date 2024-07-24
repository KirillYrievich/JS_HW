export default {
  namespaced: true,
  state: {
    newsCards: [
      {
        id: 1,
        title: 'Создадим лучший макет перепланировки',
        description: '26 Декабрь, 2022',
        image: '/img/articles1.png',
        link: '#',
        category: 'Дизайн Кухни'
      },
      {
        id: 2,
        title: 'Лучшие интерьерные идеи по низкой цене',
        description: '22 Декабрь, 2022',
        image: '/img/articles2.png',
        link: '#',
        category: 'Дизайн Для Жизни'
      },
      {
        id: 3,
        title: 'Лучшие интерьерные решения для офисов',
        description: '25 Декабрь, 2022',
        image: '/img/articles3.png',
        link: '#',
        category: 'Дизайн Интерьера'
      }
    ],
    modernCards: [
      {
        id: 1,
        title: 'Современная кухня',
        image: '/img/kitchen1.png',
        link: '#',
        category: ['Декор', 'Планировка']
      },
      {
        id: 2,
        title: 'Современная кухня',
        image: '/img/kitchen2.png',
        link: '#',
        category: ['Декор', 'Планировка']
      },
      {
        id: 3,
        title: 'Современная кухня',
        image: '/img/kitchen3.png',
        link: '#',
        category: ['Декор', 'Планировка']
      },
      {
        id: 4,
        title: 'Современная кухня',
        image: '/img/kitchen4.png',
        link: '#',
        category: ['Декор', 'Планировка']
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
}
