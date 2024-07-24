export default {
  namespaced: true,
  state: {
    pageHeader: {
      title: 'Статьи & Новости',
      links: [
        {
          label: 'Домой',
          link: './index.html'
        },
        {
          label: 'Блог',
          link: './blog.html'
        }
      ]
    },
    newsPost: {
      title: 'Low Cost Latest Invented Interior Designing Ideas',
      description: '26 Декабрь, 2022',
      text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.',
      image: '/img/articles7.png',
      link: '#'
    },
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
      },
      {
        id: 4,
        title: 'Создадим лучший макет перепланировки',
        description: '26 Декабрь, 2022',
        image: '/img/articles4.png',
        link: '#',
        category: 'Дизайн Кухни'
      },
      {
        id: 5,
        title: 'Лучшие интерьерные идеи по низкой цене',
        description: '22 Декабрь, 2022',
        image: '/img/articles5.png',
        link: '#',
        category: 'Дизайн Для Жизни'
      },
      {
        id: 6,
        title: 'Лучшие интерьерные решения для офисов',
        description: '25 Декабрь, 2022',
        image: '/img/articles6.png',
        link: '#',
        category: 'Дизайн Интерьера'
      }
    ],
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
  mutations: {},
  actions: {},
  getters: {}
}
